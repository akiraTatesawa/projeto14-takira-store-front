import React from "react";
import {
  CheckoutMain,
  CheckoutSection,
} from "../assets/styles/checkoutPageStyles";
import BackButton from "../components/BackButton";
import OrderInfo from "../components/checkoutComponents/OrderInfo";
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
        </CheckoutSection>
      </CheckoutMain>
    </>
  );
}
