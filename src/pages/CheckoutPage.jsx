import React from "react";

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
  return (
    <>
      <NavBar />

      <CheckoutMain>
        <BackButton text="Cancelar" />
        <CheckoutSection>
          <h2>Checkout</h2>
          <OrderInfo />
          <PaymentForm />
          <CheckoutSubmitButton />
        </CheckoutSection>
      </CheckoutMain>
    </>
  );
}
