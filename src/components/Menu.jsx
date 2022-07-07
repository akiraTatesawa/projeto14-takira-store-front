import React from "react";
import styled from "styled-components";

export default function Menu() {
  return <MenuContainer>Eu sou a SideBar</MenuContainer>;
}

const MenuContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  max-width: 15em;
  background: var(--brand-sec);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;
