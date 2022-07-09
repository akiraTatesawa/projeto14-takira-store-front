import styled from "styled-components";

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
      padding: 0.7em;
      background-color: #ffffff;
      box-shadow: 0px 0px 5px 2px rgb(222 222 229);
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

      & div {
        margin-top: 1.5em;
        height: 2.5em;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      & span {
        font-weight: 600;
        font-size: 1em;
      }

      & h3 {
        margin-top: 1.5em;
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

export const ProductOnStock = styled.span`
  text-align: center;
  color: ${(props) => props.color};
  font-weight: 600;
`;

export const ProductDescription = styled.div`
  max-width: 350px;
  height: auto;

  & h3 {
    margin-top: 1.5em;
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
`;
