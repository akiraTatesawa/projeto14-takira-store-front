import axios from "axios";
import React, { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import { Button } from "../../assets/styles/checkoutPageStyles";

import { CheckoutContext } from "../../contexts/CheckoutContext";
import { UserContext } from "../../contexts/UserContext";

export default function CheckoutSubmitButton({
  isSubmittingPayment,
  setIsSubmittingPayment,
}) {
  const { paymentInfo, checkoutData } = useContext(CheckoutContext);
  const { userDatas } = useContext(UserContext);

  const navigate = useNavigate();

  function finishOrder() {
    setIsSubmittingPayment(true);
    const { cartId } = checkoutData;
    const { token } = userDatas;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete(
      `http://localhost:5000/checkout/${cartId}`,
      config
    );

    promise
      .then(() => navigate("/home"))
      .catch((err) => console.log(err.response));
  }

  function renderButtonContent() {
    if (isSubmittingPayment) {
      return <ThreeDots color="#ffffff" />;
    }
    return "Finalizar compra";
  }

  const buttonContent = renderButtonContent();

  return (
    <Button
      type="button"
      title="Finalizar compra"
      isLoading={isSubmittingPayment}
      disabled={
        isSubmittingPayment ||
        paymentInfo.name === 0 ||
        paymentInfo.cvv.length < 3 ||
        paymentInfo.creditCardNumber.length < 19
      }
      onClick={() => finishOrder()}
    >
      {buttonContent}
    </Button>
  );
}
