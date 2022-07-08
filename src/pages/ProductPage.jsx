import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";

import {
  AddToCartButton,
  MainContainer,
  ProductContainer,
  ProductInfoSection,
  ProductOnStock,
} from "../assets/styles/productPageStyles";

export default function ProductPage() {
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `http://localhost:5000/product/${productId}`;

    const promise = axios.get(URL);

    promise
      .then((response) => {
        setProductData(response.data);
      })
      .catch((err) => {
        console.log(err.response);
        navigate("/");
      });
  }, []);

  function renderProductFigure() {
    if (productData) {
      return (
        <figure>
          <img
            src={productData.image}
            alt={productData.name}
            title={productData.name}
          />
          <figcaption>
            <h2>{productData.name}</h2>
            <h3>Descrição</h3>
            <p>{productData.description}</p>
          </figcaption>
        </figure>
      );
    }
    return null;
  }

  function renderProductStock() {
    if (productData) {
      const stock = productData.initialStock - productData.numberOfPurchases;
      return (
        <ProductOnStock
          color={stock <= 5 ? "var(--text-error)" : "var(--text-ok)"}
        >
          Quantidade disponível: {`${stock}`}
        </ProductOnStock>
      );
    }
    return null;
  }

  const productInfo = renderProductFigure();
  const productStock = renderProductStock();

  return (
    <>
      <NavBar />
      <MainContainer>
        <BackButton text="Voltar" />
        <ProductInfoSection>
          <ProductContainer>{productInfo}</ProductContainer>
          {productStock}
          <AddToCartButton type="button">Adicionar ao carrinho</AddToCartButton>
        </ProductInfoSection>
      </MainContainer>
    </>
  );
}
