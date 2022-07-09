/* eslint no-underscore-dangle: 0 */
import React, { useEffect, useContext } from "react";
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

import CartContext from "../contexts/CartContext";

export default function CartPage() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  useEffect(() => {
    const URL = "http://localhost:5000/shopping-cart";
    const promise = axios.get(URL, config);

    promise
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cartItems]);

  function renderItems() {
    if (cartItems) {
      return cartItems.map((item) => <CartItem key={item._id} id={item._id} />);
    }
    return null;
  }

  function renderSubtotal() {
    if (cartItems) {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total.toFixed(2).replace(".", ",");
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
          <Button>Fechar Pedido</Button>
        </Footer>
      </MainContainer>
    </>
  );
}
