import React, { useContext } from "react";

import {
  Form,
  FormContainer,
  FormSelectContainer,
} from "../../assets/styles/checkoutPageStyles";

import { CheckoutContext } from "../../contexts/CheckoutContext";

export default function PaymentForm({ isSubmittingPayment }) {
  const { paymentInfo, setPaymentInfo } = useContext(CheckoutContext);

  function creditCardMask(value) {
    let maskedValue = value;

    maskedValue = maskedValue
      .replace(/\D/g, "")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2");

    return maskedValue;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "creditCardNumber") {
      setPaymentInfo({
        ...paymentInfo,
        [name]: creditCardMask(value),
      });
    }
    if (name === "cvv") {
      setPaymentInfo({
        ...paymentInfo,
        [name]: value.replace(/\D/g, ""),
      });
    }
    if (name === "name") {
      setPaymentInfo({
        ...paymentInfo,
        [name]: value.toUpperCase().replace(/\d/g, "").replace(/\W/, ""),
      });
    }
  }

  return (
    <FormContainer>
      <h2>Dados de pagamento</h2>
      <Form>
        <input
          value={paymentInfo.name}
          name="name"
          type="text"
          placeholder="Nome no cartão"
          maxLength={20}
          onChange={(e) => handleChange(e)}
          required
          disabled={isSubmittingPayment}
          autoComplete="off"
        />
        <input
          value={paymentInfo.creditCardNumber}
          name="creditCardNumber"
          type="text"
          placeholder="Número do cartão"
          maxLength={19}
          onChange={(e) => handleChange(e)}
          required
          disabled={isSubmittingPayment}
        />
        <input
          value={paymentInfo.cvv}
          name="cvv"
          type="text"
          placeholder="Código de segurança"
          maxLength={3}
          onChange={(e) => handleChange(e)}
          required
          disabled={isSubmittingPayment}
        />
        <FormSelectContainer>
          <select name="month" disabled={isSubmittingPayment}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <select name="year" disabled={isSubmittingPayment}>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
            <option>2029</option>
          </select>
        </FormSelectContainer>
      </Form>
    </FormContainer>
  );
}
