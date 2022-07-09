import React from "react";

import {
  OrderInfoContainer,
  TotalOrder,
} from "../../assets/styles/checkoutPageStyles";

export default function OrderInfo({ username, total }) {
  return (
    <OrderInfoContainer>
      <span>
        Enviando para <strong>{username || "$username"}</strong>
      </span>
      <TotalOrder>
        <strong>Total do pedido: </strong>
        <span>{total || "R$ 999,99"}</span>
      </TotalOrder>
    </OrderInfoContainer>
  );
}
