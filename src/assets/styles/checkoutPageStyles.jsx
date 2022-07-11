import styled from "styled-components";

import { SubmitButton } from "./authStyles";
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

export const FormContainer = styled.div`
  margin-top: 1.5em;
  width: 100%;
  max-width: 350px;
  min-height: 230px;
  background-color: var(--container-bg);
  box-shadow: 0px 0px 5px 2px rgb(222 222 229);
  border-radius: 5px;
  padding: 1em;

  & h2 {
    font-size: 1em;
    font-weight: 600;
    margin-bottom: 1em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  & input[type="text"] {
    font-family: "Inter", sans-serif;
    font-size: 1em;
    line-height: 1.5em;
    height: 3em;
    width: 100%;
    border: 0.1px solid rgba(39, 39, 42, 0.1);
    border-radius: 5px;
    padding: 0.7em;

    &:focus {
      outline: 1px solid var(--brand-hover);
      outline-offset: 1px;
    }

    &::placeholder {
      color: var(--text-sec);
    }
  }
`;

export const FormSelectContainer = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  flex-grow: 1;
  gap: 0.5em;

  & select {
    font-family: "Inter", sans-serif;
    color: var(--text-sec);
    padding: 0.7em;
    width: 100%;
    text-align: center;
    background-color: #ffffff;
    border: 0.1px solid rgba(39, 39, 42, 0.1);
    border-radius: 5px;
  }

  & option {
    font-size: 1em;
  }
`;

export const OrderInfoContainer = styled.div`
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
  overflow: hidden;
`;

export const TotalOrder = styled.div`
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

export const Button = styled(SubmitButton)`
  font-size: 1.3em;
  width: 80%;
  max-width: 280px;
  margin-top: 1em;
  min-height: ${(props) => (props.isLoading ? "1.3em" : "2.3em")};
  height: ${(props) => (props.isLoading ? "2.3em" : "auto")};
  line-height: 1.4em;
  padding: 9px;
`;
