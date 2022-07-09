import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  CheckoutMain,
  CheckoutSection,
} from "../assets/styles/checkoutPageStyles";

import BackButton from "../components/BackButton";
import CheckoutSubmitButton from "../components/checkoutComponents/CheckoutSubmitButton";
import OrderInfo from "../components/checkoutComponents/OrderInfo";
import PaymentForm from "../components/checkoutComponents/PaymentForm";
import NavBar from "../components/NavBar";

export default function CheckoutPage() {
  const [checkoutData, setCheckoutData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const URL = "http://localhost:5000/carts";

    const { token } = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise
      .then((res) => setCheckoutData(res.data))
      .catch((err) => console.log(err.response));
  });

  function renderCheckoutSection() {
    if (checkoutData) {
      return (
        <CheckoutSection>
          <h2>Checkout</h2>
          <OrderInfo total={checkoutData.total.toFixed(2).replace(".", ",")} />
          <PaymentForm isSubmittingPayment={isSubmitting} />
          <CheckoutSubmitButton
            isSubmittingPayment={isSubmitting}
            setIsSubmittingPayment={setIsSubmitting}
          />
        </CheckoutSection>
      );
    }
    return null;
  }

  const checkoutSection = renderCheckoutSection();

  return (
    <>
      <NavBar />

      <CheckoutMain>
        <BackButton text="Cancelar" />
        {checkoutSection}
      </CheckoutMain>
    </>
  );
}
