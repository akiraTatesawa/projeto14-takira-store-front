import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import NavBar from "../components/NavBar";
import CartItem from "../components/CartItem";

import {
  MainContainer,
  CartContent,
  SubTitle,
  Items,
  Footer,
  Button,
} from "../assets/styles/cartPageStyles";

import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";

export default function CartPage() {
  const { userDatas } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const { token } = userDatas;
    const URL = `${process.env.REACT_APP_API_BASE_URL}/shopping-cart`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);
    promise
      .then((res) => setCartItems(res.data))
      .catch((err) => {
        console.log(err.response);
        navigate("/");
      });
  }, []);

  function renderItems() {
    if (cartItems.length > 0) {
      return cartItems.map((item) => <CartItem key={item._id} id={item._id} />);
    }
    return <p>Não há itens no carrinho</p>;
  }

  function renderSubtotal() {
    if (cartItems) {
      return cartItems
        .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        .toFixed(2)
        .replace(".", ",");
    }
    return null;
  }

  const itemsContent = renderItems();
  const subtotal = renderSubtotal();

  return (
    <>
      <NavBar />
      <MainContainer>
        <CartContent>
          <SubTitle>Meu carrinho</SubTitle>
          <Items>{itemsContent}</Items>
        </CartContent>
        <Footer>
          <p>Subtotal = R$ {subtotal}</p>
          <Button
            disabled={cartItems.length === 0}
            onClick={() => navigate("/checkout")}
          >
            Fechar Pedido
          </Button>
        </Footer>
      </MainContainer>
    </>
  );
}
