import React, { useState } from "react";
import { MdMenu, MdShoppingCart } from "react-icons/md";

import Menu from "./Menu";

import { NavBarContainer, Title } from "../assets/styles/navBarStyles";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <NavBarContainer>
      {isExpanded ? <Menu /> : null}
      <MdMenu
        size={30}
        style={{ color: "#ffffff" }}
        onClick={() => setIsExpanded(true)}
      />
      <Title>TAKIRA</Title>
      <MdShoppingCart size={30} style={{ color: "#ffffff" }} />
    </NavBarContainer>
  );
}

export default NavBar;
