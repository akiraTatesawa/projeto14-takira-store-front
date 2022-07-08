import styled from "styled-components";
import { SubmitButton } from "./authStyles";

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 5.36em 1em 2em 1em;
`;

export const ProductInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2.65em;
  padding: 0 1.65em;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 350px;

  & figure {
    width: 100%;
    height: auto;

    & img {
      padding: 10px;
      background-color: var(--container-bg);
      box-shadow: 0px 2px 5px #dedee6;
      border-radius: 5px;
      width: 100%;
      aspect-ratio: 1.5;
      max-height: 280px;
      object-fit: contain;
    }

    & figcaption {
      margin-top: 1em;

      & h2 {
        font-size: 1.29em;
        line-height: 1.4em;
        font-weight: 600;
      }

      & h3 {
        margin-top: 2em;
        font-size: 1.2em;
        font-weight: 600;
      }

      & p {
        margin-top: 1em;
        font-size: 1em;
        color: var(--text-sec);
        line-height: 1.5em;
        font-weight: 500;
      }
    }
  }
`;

export const AddToCartButton = styled(SubmitButton)`
  width: 80%;
  max-width: 280px;
  margin-top: 0;
  margin-top: 0.7em;
  min-height: 2.3em;
  height: auto;
  line-height: 1.4em;
  padding: 9px;
`;

export const ProductOnStock = styled.span`
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.color};
  margin-top: 4em;
  font-weight: 600;
`;
