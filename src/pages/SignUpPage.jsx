import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AuthContainer, SubmitButton } from "../assets/styles/sharedStyles";

export default function SignUpPage() {
  return (
    <AuthContainer>
      <SignUpContent>
        <Title>TAKIRA</Title>
        <form>
          <Input placeholder="nome" />
          <Input placeholder="email" />
          <Input placeholder="senha" />
          <Input placeholder="confirmar senha" />
          <SubmitButton>Cadastrar</SubmitButton>
        </form>
        <Link to="/">
          <span>Já possui uma conta? Faça login!</span>
        </Link>
      </SignUpContent>
    </AuthContainer>
  );
}

const SignUpContent = styled.section`
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
    font-weight: 500;
    margin-top: 1.6em;
  }
`;

const Title = styled.h1`
  color: var(--text-on-brand);
  font-size: 3.14em;
  margin-bottom: 1.8rem;
`;

const Input = styled.input`
  max-height: 3em;
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
