/* eslint no-underscore-dangle: 0 */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BsTrashFill } from "react-icons/bs";

import {
  ItemContainer,
  ItemInfos,
  GeneralInfos,
} from "../assets/styles/cartItemStyles";

import CartContext from "../contexts/CartContext";

export default function CartItem({ id }) {
  const [cartItem, setCartItem] = useState({});
  const { cartItems, setCartItems } = useContext(CartContext);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  useEffect(() => {
    setCartItem(cartItems.find((item) => item._id === id));
  }, [cartItems]);

  function handleOnClick() {
    const URL = `http://localhost:5000/shopping-cart/${id}`;
    const promise = axios.delete(URL, config);

    promise
      .then(() => {
        setCartItems(cartItems.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ItemContainer>
      <img src={cartItem.image} alt={cartItem.name} title={cartItem.name} />
      <ItemInfos>
        <GeneralInfos>
          <h3>{cartItem.name}</h3>
          <p>R$ {cartItem.price.toFixed(2).replace(".", ",")}</p>
        </GeneralInfos>
        <BsTrashFill
          size={20}
          style={{ color: "#27272a" }}
          onClick={() => handleOnClick()}
        />
      </ItemInfos>
    </ItemContainer>
  );
}
