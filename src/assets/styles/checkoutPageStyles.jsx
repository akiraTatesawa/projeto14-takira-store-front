import styled from "styled-components";

import { MainContainer, ProductInfoSection } from "./productPageStyles";

export const CheckoutMain = styled(MainContainer)``;

export const CheckoutSection = styled(ProductInfoSection)`
  align-items: center;

  & h2 {
    font-size: 1.3em;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`;
