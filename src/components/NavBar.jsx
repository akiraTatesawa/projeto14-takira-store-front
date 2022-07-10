import React from "react";
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

import Menu from "./Menu";

import { NavBarContainer, Title } from "../assets/styles/navBarStyles";

function NavBar() {
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <Menu />
      <Title onClick={() => navigate("/home")}>TAKIRA</Title>
      <MdShoppingCart
        size={30}
        color="#ffffff"
        onClick={() => navigate("/shopping-cart")}
      />
    </NavBarContainer>
  );
}

export default NavBar;
