import React from "react";

import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";

import {
  AddToCartButton,
  MainContainer,
  ProductContainer,
  ProductInfoSection,
  ProductOnStock,
} from "../assets/styles/productPageStyles";

export default function ProductPage() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <BackButton text="Voltar" />
        <ProductInfoSection>
          <ProductContainer>
            <figure>
              <img
                src="https://cdn.ligadosgames.com/imagens/pc-gamer-bom-e-barato-og.jpg"
                alt="nome do produto"
                title="nome do produto"
              />
              <figcaption>
                <h2>Nome do produto</h2>
                <h3>Descrição</h3>
                <p>Isso é uma descrição do produto x y z palavra palavra</p>
              </figcaption>
            </figure>
          </ProductContainer>
          <ProductOnStock>Quantidade disponível: 80</ProductOnStock>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </ProductInfoSection>
      </MainContainer>
    </>
  );
}
