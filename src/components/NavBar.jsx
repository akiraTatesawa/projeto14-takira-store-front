import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdMenu, MdShoppingCart } from "react-icons/md";

import Menu from "./Menu";

import { NavBarContainer, Title } from "../assets/styles/navBarStyles";

function NavBar() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  function renderSideMenu() {
    if (isExpanded) return <Menu />;
    return null;
  }

  const sideMenu = renderSideMenu();

  return (
    <NavBarContainer>
      {sideMenu}
      <MdMenu
        size={30}
        style={{ color: "#ffffff" }}
        onClick={() => setIsExpanded(true)}
      />
      <Title onClick={() => navigate("/home")}>TAKIRA</Title>
      <MdShoppingCart size={30} style={{ color: "#ffffff" }} />
    </NavBarContainer>
  );
}

export default NavBar;
