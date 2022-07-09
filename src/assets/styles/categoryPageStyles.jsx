import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 2.6em;
  margin-top: 59px;
`;

export const ProductsContent = styled.section`
  width: 100%;
  height: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.h2`
  width: 100%;
  text-align: start;
  font-size: 1.5em;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.3em;
`;

export const Products = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Product = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding: 0.8em;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgb(222 222 229);
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.3em);
    box-shadow: 0px 0px 8px 4px rgb(222 222 229);
  }
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
  }
`;

export const Name = styled.h3`
  width: 90%;
  height: 2.4em;
  font-weight: 500;
  font-size: clamp(0.3em, 0.5em + 2vw, 1.2em);
  line-height: 1.2em;
  color: var(--text-product-name);
  margin-bottom: 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Price = styled.h4`
  width: 100%;
  font-size: clamp(0.3em, 0.5em + 2vw, 1.2em);
  font-weight: 500;
  text-align: right;
  color: var(--text-primary);
  margin-top: 0.5em;
`;
