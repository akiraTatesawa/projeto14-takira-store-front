import axios from "axios";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

import { SubmitButton } from "../assets/styles/authStyles";

export default function AddToCartButton({ productId }) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [requisitionStatus, setRequisitionStatus] = useState(null);

  function addProductToCart() {
    setIsAddingToCart(true);

    const URL = "http://localhost:5000/carts/add-product";
    // provisory way to get a token
    const { token } = JSON.parse(localStorage.getItem("userDatas"));

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
      })
      .catch((err) => {
        setIsAddingToCart(false);
        setRequisitionStatus("error");
        console.log(err.response);
      });
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
