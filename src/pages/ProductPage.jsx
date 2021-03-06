import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";
import AddToCartButton from "../components/AddToCartButton";

import {
  MainContainer,
  ProductContainer,
  ProductDescription,
  ProductInfoSection,
  ProductOnStock,
} from "../assets/styles/productPageStyles";
import { UserContext } from "../contexts/UserContext";

export default function ProductPage() {
  const [productData, setProductData] = useState(null);
  const { userDatas } = useContext(UserContext);
  const { productId } = useParams();

  const navigate = useNavigate();

  function handleGetProductError(err) {
    const { status } = err.response;
    console.log(err.response);
    if (status === 401) {
      localStorage.removeItem("userDatas");
      navigate("/");
    } else {
      navigate("/home");
    }
  }

  function getProduct() {
    const { token } = userDatas;
    const URL = `${process.env.REACT_APP_API_BASE_URL}/product/${productId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise
      .then((response) => {
        setProductData(response.data);
      })
      .catch(handleGetProductError);
  }

  useEffect(() => getProduct(), []);

  function renderProductStock() {
    if (productData) {
      const stock =
        productData.initialStock -
        productData.numberOfPurchases -
        productData.numberOfCarts;
      return (
        <ProductOnStock
          color={stock <= 5 ? "var(--text-error)" : "var(--text-ok)"}
        >
          {stock <= 0 ? "Esgotado" : `Em estoque: ${stock}`}
        </ProductOnStock>
      );
    }
    return null;
  }

  const productStock = renderProductStock();

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
            <div>
              <span>R$ {productData.price.toFixed(2).replace(".", ",")}</span>
              {productStock}
            </div>
          </figcaption>
        </figure>
      );
    }
    return null;
  }

  const productInfo = renderProductFigure();

  function renderProductDescription() {
    if (productData) {
      return (
        <ProductDescription>
          <h3>Descri????o</h3>
          <p>{productData.description}</p>
        </ProductDescription>
      );
    }
    return null;
  }

  const productDescription = renderProductDescription();

  function calcProductStock() {
    if (productStock) {
      return (
        productData.initialStock -
        productData.numberOfPurchases -
        productData.numberOfCarts
      );
    }
    return null;
  }

  const stock = calcProductStock();

  return (
    <>
      <NavBar />
      <MainContainer>
        <BackButton text="Voltar" />
        <ProductInfoSection>
          <ProductContainer>{productInfo}</ProductContainer>
          <AddToCartButton
            type="button"
            productId={productData?._id}
            productStock={stock}
            reloadProductInfo={() => getProduct()}
          />
          {productDescription}
        </ProductInfoSection>
      </MainContainer>
    </>
  );
}
