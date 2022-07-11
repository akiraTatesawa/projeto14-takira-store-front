import React from "react";

import NavBar from "../components/NavBar";
import CategoriesSlider from "../components/CategoriesSlider";
import BestSellers from "../components/BestSellers";

import Banner from "../assets/images/banner.png";

import {
  MainContainer,
  HomeContent,
  Subtitle,
} from "../assets/styles/homePageStyles";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <HomeContent>
          <img src={Banner} alt="Banner" />
          <Subtitle>Categorias</Subtitle>
          <CategoriesSlider />
          <Subtitle>Mais vendidos</Subtitle>
          <BestSellers />
        </HomeContent>
      </MainContainer>
    </>
  );
}
