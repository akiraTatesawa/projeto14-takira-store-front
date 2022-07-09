import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import NavBar from "../components/NavBar";

import CategoryContext from "../contexts/CategoryContext";

import {
  MainContainer,
  ProductsContent,
  SubTitle,
  Products,
  Product,
  Image,
  Name,
  Price,
} from "../assets/styles/categoryPageStyles";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const { categoryName } = useContext(CategoryContext);
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `http://localhost:5000/products/${categoryId}`;

    const promise = axios.get(URL);

    promise
      .then((response) => {
        setProducts(response.data);
      })
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
          <Name>{product.name}</Name>
          <Image>
            <img src={product.image} alt={product.name} title={product.name} />
          </Image>
          <Price>R$ {product.price.toFixed(2).replace(".", ",")}</Price>
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
