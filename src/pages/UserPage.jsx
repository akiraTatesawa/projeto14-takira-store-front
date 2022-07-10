import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";

export default function UserPage() {
  return (
    <>
      <NavBar />
      <ProfileMainContainer>
        <h1>oieee</h1>
      </ProfileMainContainer>
    </>
  );
}

export const ProfileMainContainer = styled.main`
  padding: 5.4em;
`;
