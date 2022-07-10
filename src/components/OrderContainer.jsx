import React from "react";

import {
  Date,
  Items,
  OrderContainer,
  OrderDetails,
  Total,
} from "../assets/styles/profilePageStyles";

export default function Order({ date, names, total }) {
  function renderOrderItemsNames() {
    return names.map((el) => el.name).join(" + ");
  }

  function renderTotal() {
    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  }

  const orderItemsNames = renderOrderItemsNames();
  const orderTotal = renderTotal();

  return (
    <OrderContainer>
      <Date>{date}</Date>
      <OrderDetails>
        <Items>{orderItemsNames}</Items>
        <Total>{orderTotal}</Total>
      </OrderDetails>
    </OrderContainer>
  );
}
