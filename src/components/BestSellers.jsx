import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../contexts/UserContext";
import { Products, Product } from "../assets/styles/categoryPageStyles";

export default function BestSellers() {
  const [bestSellers, setBestSellers] = useState([]);
  const { userDatas } = useContext(UserContext);
  const navigate = useNavigate();

  function handleGetBestSellersError(err) {
    const { status } = err.response;
    console.log(err.response);
    if (status === 401) {
      localStorage.removeItem("userDatas");
      navigate("/");
    }
  }

  useEffect(() => {
    const { token } = userDatas;
    const URL = `${process.env.REACT_APP_API_BASE_URL}/best-sellers`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);
    promise
      .then((response) => setBestSellers(response.data))
      .catch(handleGetBestSellersError);
  }, []);

  function handleOnClick(productId) {
    navigate(`/product/${productId}`);
  }

  function renderBestSellers() {
    if (bestSellers) {
      return bestSellers.map((product) => (
        <Product key={product._id} onClick={() => handleOnClick(product._id)}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} title={product.name} />
          <h4>R$ {product.price.toFixed(2).replace(".", ",")}</h4>
        </Product>
      ));
    }
    return null;
  }

  const bestSellersList = renderBestSellers();

  return <Products>{bestSellersList}</Products>;
}
