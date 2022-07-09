import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import {
  CheckoutMain,
  CheckoutSection,
} from "../assets/styles/checkoutPageStyles";

import { UserContext } from "../contexts/UserContext";

import BackButton from "../components/BackButton";
import CheckoutSubmitButton from "../components/checkoutComponents/CheckoutSubmitButton";
import OrderInfo from "../components/checkoutComponents/OrderInfo";
import PaymentForm from "../components/checkoutComponents/PaymentForm";
import NavBar from "../components/NavBar";

import { CheckoutContext } from "../contexts/CheckoutContext";

export default function CheckoutPage() {
  const [checkoutData, setCheckoutData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    creditCardNumber: "",
    cvv: "",
  });

  const { userDatas } = useContext(UserContext);

  useEffect(() => {
    const { token, name } = userDatas;
    const URL = "http://localhost:5000/carts";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);
    promise
      .then((res) => setCheckoutData({ ...res.data, name }))
      .catch((err) => console.log(err.response));
  }, []);

  function renderCheckoutSection() {
    if (checkoutData) {
      return (
        <CheckoutSection>
          <h2>Checkout</h2>
          <OrderInfo
            total={checkoutData.total.toFixed(2).replace(".", ",")}
            username={checkoutData.name}
          />
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
      <CheckoutContext.Provider
        value={{ paymentInfo, setPaymentInfo, checkoutData }}
      >
        <CheckoutMain>
          <BackButton text="Cancelar" />
          {checkoutSection}
        </CheckoutMain>
      </CheckoutContext.Provider>
    </>
  );
}
