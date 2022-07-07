import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.3em;
  width: 100%;
  height: 59px;
  background-color: var(--brand);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Title = styled.h1`
  color: var(--text-on-brand);
  font-size: 2.8em;
`;
