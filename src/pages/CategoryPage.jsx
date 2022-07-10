import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import NavBar from "../components/NavBar";
import SelectSmall from "../components/SelectSmall";

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
  const [orderBy, setOrderBy] = useState("");
  const { categoryId } = useParams();
  const { userDatas } = useContext(UserContext);
  const { categoryName } = useContext(CategoryContext);
  const navigate = useNavigate();

  function orderProducts(productsList) {
    let orderedProducts;
    if (orderBy === 10) {
      orderedProducts = productsList.sort((a, b) => a.price - b.price);
    } else if (orderBy === 20) {
      orderedProducts = productsList.sort((a, b) => b.price - a.price);
    } else if (orderBy === 30) {
      orderedProducts = productsList.sort(
        (a, b) => b.numberOfPurchases - a.numberOfPurchases
      );
    } else {
      orderedProducts = productsList;
    }
    setProducts(orderedProducts);
  }

  function handleGetCategoryError(err) {
    const { status } = err.response;
    console.log(err.response);
    if (status === 401) {
      localStorage.removeItem("userDatas");
      navigate("/");
    } else {
      navigate("/home");
    }
  }

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
      .then((response) => orderProducts(response.data))
      .catch(handleGetCategoryError);
  }, [orderBy]);

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
          <SelectSmall orderBy={orderBy} setOrderBy={setOrderBy} />
          <Products>{productsContent}</Products>
        </ProductsContent>
      </MainContainer>
    </>
  );
}
