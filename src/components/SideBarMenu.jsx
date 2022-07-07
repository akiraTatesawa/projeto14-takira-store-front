import React from "react";
import styled from "styled-components";

function SideBarMenu() {
  return <Container>Eu sou a SideBar</Container>;
}

const Container = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  max-width: 300px;
  background: #64849e;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export default SideBarMenu;
