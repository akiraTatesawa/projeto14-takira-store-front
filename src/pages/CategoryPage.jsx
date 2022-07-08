/* eslint no-underscore-dangle: 0 */
import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import NavBar from "../components/NavBar";

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
  const { categoryName } = useLocation().state;
  const navigate = useNavigate();

  function handleError(err) {
    const { status } = err.response;

    if (status === 422) {
      alert("Não autorizado!");
    } else if (status === 400) {
      alert("Categoria não informada!");
    } else if (status === 404) {
      alert("Categoria não encontrada!");
    } else {
      alert("Houve um erro ao obter os produtos, faça login novamente!");
    }
  }

  useEffect(() => {
    const URL = `http://localhost:5000/products/${categoryId}`;
    const promise = axios.get(URL);

    promise
      .then((res) => {
        setProducts(res.data);
      })
      .catch(handleError);
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
          <Price>R$ {product.price.toFixed(2)}</Price>
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
