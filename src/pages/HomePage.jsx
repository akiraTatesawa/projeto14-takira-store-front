import React from "react";

import NavBar from "../components/NavBar";
import CategoriesSlider from "../components/CategoriesSlider";

import {
  MainContainer,
  HomeContent,
  SubTitle,
} from "../assets/styles/homePageStyles";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <HomeContent>
          <SubTitle>Categorias</SubTitle>
          <CategoriesSlider />
        </HomeContent>
      </MainContainer>
    </>
  );
}
