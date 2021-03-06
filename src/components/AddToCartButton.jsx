import axios from "axios";
import React, { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { SubmitButton } from "../assets/styles/authStyles";

import { UserContext } from "../contexts/UserContext";

export default function AddToCartButton({
  productId,
  reloadProductInfo,
  productStock,
}) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [requisitionStatus, setRequisitionStatus] = useState(null);
  const { userDatas } = useContext(UserContext);

  const navigate = useNavigate();

  function handleAddToCartError(err) {
    const { status } = err.response;
    console.log(err.response);
    if (status === 401) {
      localStorage.removeItem("userDatas");
      navigate("/");
    } else {
      setIsAddingToCart(false);
      setRequisitionStatus("error");
    }
  }

  function addProductToCart() {
    setIsAddingToCart(true);
    const URL = `${process.env.REACT_APP_API_BASE_URL}/carts/add-product`;
    const { token } = userDatas;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(URL, { productId, quantity: 1 }, config);

    promise
      .then(() => {
        setIsAddingToCart(false);
        setRequisitionStatus("success");
        reloadProductInfo();
      })
      .catch(handleAddToCartError);
  }

  function renderButtonContent() {
    if (isAddingToCart) {
      return <ThreeDots color="#FFFFFF" />;
    }
    return "Adicionar ao carrinho";
  }

  function renderFeedbackMessage() {
    if (requisitionStatus === "error") {
      return (
        <FeedbackMessage reqStatus={requisitionStatus}>
          Não foi possível adicionar o item
        </FeedbackMessage>
      );
    }
    if (requisitionStatus === "success") {
      return (
        <FeedbackMessage reqStatus={requisitionStatus}>
          Adicionado com sucesso!
        </FeedbackMessage>
      );
    }
    return null;
  }

  const buttonContent = renderButtonContent();
  const feedbackMessage = renderFeedbackMessage();

  return (
    <>
      <Button
        isLoading={isAddingToCart}
        disabled={isAddingToCart || productStock <= 0}
        type="button"
        onClick={() => addProductToCart()}
      >
        {buttonContent}
      </Button>
      {feedbackMessage}
    </>
  );
}

const Button = styled(SubmitButton)`
  font-family: "Inter", sans-serif;
  font-size: 1.3em;
  width: 80%;
  max-width: 280px;
  margin-top: 1em;
  min-height: ${(props) => (props.isLoading ? "1.3em" : "2.3em")};
  height: ${(props) => (props.isLoading ? "2.3em" : "auto")};
  line-height: 1.4em;
  padding: 9px;
`;

const FeedbackMessage = styled.p`
  margin-top: 0.7em;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  color: ${(props) =>
    props.reqStatus === "error" ? "var(--text-error)" : "var(--text-ok)"};
`;
