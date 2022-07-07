import React from "react";

import NavBar from "../components/NavBar";
import CategoriesSlider from "../components/CategoriesSlider";

import { Container, SubTitle } from "../assets/styles/homeStyles";

function HomePage() {
  return (
    <>
      <NavBar />
      <Container>
        <SubTitle>Categorias</SubTitle>
        <CategoriesSlider />
      </Container>
    </>
  );
}

export default HomePage;
