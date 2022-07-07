import React, { useState } from "react";
import styled from "styled-components";
import { MdMenu, MdShoppingCart } from "react-icons/md";

import SideBarMenu from "./SideBarMenu";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>
      {isExpanded ? <SideBarMenu /> : null}
      <MdMenu
        size={30}
        style={{ color: "#ffffff" }}
        onClick={() => setIsExpanded(true)}
      />
      <Title>TAKIRA</Title>
      <MdShoppingCart size={30} style={{ color: "#ffffff" }} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  height: 59px;
  background: #30475e;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
`;

export default NavBar;
