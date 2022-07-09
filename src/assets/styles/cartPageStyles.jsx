import styled from "styled-components";

import { SubmitButton } from "./authStyles";

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 2.6em;
`;

export const CartContent = styled.section`
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 59px;
  margin-bottom: 104px;
`;

export const SubTitle = styled.h2`
  width: 100%;
  text-align: start;
  font-size: 1.5em;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.3em;
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 4px -4px 10px #f4f4f5;

  p {
    font-size: 1em;
    font-weight: 500;
    color: var(--text-sec);
  }
`;

export const Button = styled(SubmitButton)`
  width: 159px;
  height: 44px;
  margin-top: 0.5em;
`;
