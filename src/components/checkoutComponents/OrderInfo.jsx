import React from "react";
import styled from "styled-components";

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

const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 6em;
  width: 100%;
  max-width: 350px;
  background-color: var(--container-bg);
  box-shadow: 0px 0px 5px 2px rgb(222 222 229);
  border-radius: 5px;
  padding: 0.8em;
`;

const TotalOrder = styled.div`
  padding-top: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  line-height: 1.2em;

  & span {
    font-weight: 600;
    color: var(--text-error);
  }
`;
