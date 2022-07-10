import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.3em 0 0;
  background-color: var(--brand);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 2.8em;
  color: var(--text-on-brand);
`;
