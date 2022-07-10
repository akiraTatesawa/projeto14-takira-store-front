import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import NavBar from "../components/NavBar";

import { UserContext } from "../contexts/UserContext";
import { CategoryContext } from "../contexts/CategoryContext";

import {
  MainContainer,
  ProductsContent,
  SubTitle,
  Products,
  Product,
} from "../assets/styles/categoryPageStyles";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const { userDatas } = useContext(UserContext);
  const { categoryName } = useContext(CategoryContext);
  const navigate = useNavigate();

  useEffect(() => {
    const { token } = userDatas;
    const URL = `${process.env.REACT_APP_API_BASE_URL}/products/${categoryId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);
    promise
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log(err.response);
        navigate(-1);
      });
  }, []);

  function handleOnClick(productId) {
    navigate(`/product/${productId}`);
  }

  function renderProducts() {
    if (products) {
      return products.map((product) => (
        <Product key={product._id} onClick={() => handleOnClick(product._id)}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} title={product.name} />
          <h4>R$ {product.price.toFixed(2).replace(".", ",")}</h4>
        </Product>
      ));
    }
    return null;
  }

  const productsContent = renderProducts();

  return (
    <>
      <NavBar />
      <MainContainer>
        <ProductsContent>
          <SubTitle>{categoryName}</SubTitle>
          <Products>{productsContent}</Products>
        </ProductsContent>
      </MainContainer>
    </>
  );
}
