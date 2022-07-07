import styled from "styled-components";

// Used in sign in and sign up
export const AuthContainer = styled.main`
  height: 100%;
  width: 100%;
  background-color: var(--brand);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.14em;
`;

export const Title = styled.h1`
  color: var(--text-on-brand);
  font-size: 3.14em;
  margin-bottom: 1.8rem;
`;

export const AuthContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.57em;
  }

  & a {
    color: var(--text-on-brand);
    text-align: center;
    font-size: 1em;
    font-weight: 600;
    margin-top: 1.6em;
  }
`;

export const Input = styled.input`
  height: 3em;
  width: 100%;
  max-width: 350px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  line-height: 1em;

  &::placeholder {
    color: var(--text-sec);
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const WarningText = styled.span`
  color: var(--text-warning);
  font-size: 0.95em;
  text-align: center;
  font-weight: 600;
  margin-top: 0.5em;
`;
