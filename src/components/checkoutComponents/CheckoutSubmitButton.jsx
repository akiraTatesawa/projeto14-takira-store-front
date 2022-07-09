import React from "react";
import { ThreeDots } from "react-loader-spinner";

import { Button } from "../../assets/styles/checkoutPageStyles";

export default function CheckoutSubmitButton({
  isSubmittingPayment,
  setIsSubmittingPayment,
}) {
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
      onClick={() => setIsSubmittingPayment(true)}
    >
      {buttonContent}
    </Button>
  );
}
