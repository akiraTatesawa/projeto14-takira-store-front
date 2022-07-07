import styled from "styled-components";

// Used in sign in and sing up
export const AuthContainer = styled.main`
  height: 100%;
  width: 100%;
  background-color: var(--brand);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.14em;
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 350px;
  height: 2em;
  background-color: var(--brand-sec);
  font-size: 1.43em;
  font-weight: 600;
  line-height: 1em;
  color: var(--text-on-brand);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  margin-top: 1.2em;
`;
