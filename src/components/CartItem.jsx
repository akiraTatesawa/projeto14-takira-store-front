import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsTrashFill } from "react-icons/bs";

import {
  ItemContainer,
  Image,
  ItemInfos,
  GeneralInfos,
  Actions,
} from "../assets/styles/cartItemStyles";

import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";

export default function CartItem({ id }) {
  const [cartItem, setCartItem] = useState({});
  const { userDatas } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItem(cartItems.find((item) => item._id === id));
  }, []);

  function handleDeleteCartItemError(err) {
    const { status } = err.response;
    console.log(err.response);
    if (status === 401) {
      localStorage.removeItem("userDatas");
      navigate("/");
    } else {
      navigate("/home");
    }
  }

  function handleOnClickTrash() {
    const { token } = userDatas;
    const URL = `${process.env.REACT_APP_API_BASE_URL}/shopping-cart/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete(URL, config);
    promise
      .then(() => setCartItems(cartItems.filter((item) => item._id !== id)))
      .catch(handleDeleteCartItemError);
  }

  function renderCartItem() {
    if (cartItem) {
      return (
        <>
          <Image
            src={cartItem.image}
            alt={cartItem.name}
            title={cartItem.name}
            onClick={() => navigate(`/product/${cartItem._id}`)}
          />
          <ItemInfos>
            <GeneralInfos>
              <h3>{cartItem.name}</h3>
              <p>R${cartItem.price?.toFixed(2).toString().replace(".", ",")}</p>
            </GeneralInfos>
            <Actions>
              <p>Quantidade: {cartItem.quantity}</p>
              <BsTrashFill
                size={20}
                color="#27272a"
                onClick={() => handleOnClickTrash()}
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
