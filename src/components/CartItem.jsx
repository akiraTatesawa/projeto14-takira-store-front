import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsTrashFill } from "react-icons/bs";

import {
  ItemContainer,
  ItemInfos,
  GeneralInfos,
  Actions,
} from "../assets/styles/cartItemStyles";

import CartContext from "../contexts/CartContext";

export default function CartItem({ id }) {
  const [cartItem, setCartItem] = useState({});
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const { token } = JSON.parse(localStorage.getItem("userDatas"));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    setCartItem(cartItems.find((item) => item._id === id));
  }, []);

  function handleOnClick() {
    const URL = `http://localhost:5000/shopping-cart/${id}`;
    const promise = axios.delete(URL, config);

    promise
      .then(() => {
        setCartItems(cartItems.filter((item) => item._id !== id));
      })
      .catch(() => {
        navigate("/");
      });
  }

  function renderCartItem() {
    if (cartItem) {
      return (
        <>
          <img src={cartItem.image} alt={cartItem.name} title={cartItem.name} />
          <ItemInfos>
            <GeneralInfos>
              <h3>{cartItem.name}</h3>
              <p>R${cartItem.price?.toFixed(2).toString().replace(".", ",")}</p>
            </GeneralInfos>
            <Actions>
              <p>Quantidade: {cartItem.quantity}</p>
              <BsTrashFill
                size={20}
                style={{ color: "#27272a" }}
                onClick={() => handleOnClick()}
              />
            </Actions>
          </ItemInfos>
        </>
      );
    }
    return null;
  }

  const cartItemContent = renderCartItem();

  return <ItemContainer>{cartItemContent}</ItemContainer>;
}
