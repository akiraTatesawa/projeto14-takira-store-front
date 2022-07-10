import React from "react";

import NavBar from "../components/NavBar";
import CategoriesSlider from "../components/CategoriesSlider";

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
          <Subtitle>Categorias</Subtitle>
          <CategoriesSlider />
        </HomeContent>
      </MainContainer>
    </>
  );
}
