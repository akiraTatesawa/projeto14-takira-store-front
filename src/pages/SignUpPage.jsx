import axios from "axios";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
  AuthContainer,
  SubmitButton,
  WarningText,
} from "../assets/styles/sharedStyles";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const navigate = useNavigate();

  function handleError(err) {
    const { status } = err.response;

    console.log(err.response);
    setSignUpData({
      ...signUpData,
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    });

    if (status === 422) {
      setErrorText("Preencha os campos corretamente!");
    } else {
      setErrorText("Houve um erro ao realizar o cadastro");
    }

    setIsLoading(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
    setErrorText(null);
  }

  function submitUserData(e) {
    const URL = "http://localhost:5000/sign-up";
    e.preventDefault();
    setIsLoading(true);

    const promise = axios.post(URL, signUpData);

    promise
      .then(() => {
        navigate("/");
      })
      .catch(handleError);
  }

  function renderWarning() {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      return <WarningText>As senhas devem ser idênticas</WarningText>;
    }
    return null;
  }

  function renderButtonContent() {
    if (isLoading) {
      return <ThreeDots color="#FFFFFF" />;
    }
    return "Cadastrar";
  }

  function renderSubmitErrorText() {
    if (errorText) {
      return <WarningText>{errorText}</WarningText>;
    }
    return null;
  }

  const warningText = renderWarning();
  const submitErrorText = renderSubmitErrorText();
  const buttonContent = renderButtonContent();

  return (
    <AuthContainer>
      <SignUpContent>
        <Title>TAKIRA</Title>

        <form onSubmit={(e) => submitUserData(e)}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            value={signUpData.name}
            maxLength={20}
            required
            disabled={isLoading}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={signUpData.email}
            maxLength={30}
            required
            disabled={isLoading}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            value={signUpData.password}
            required
            disabled={isLoading}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="password"
            placeholder="Confirmar senha"
            name="passwordConfirmation"
            value={signUpData.passwordConfirmation}
            required
            disabled={isLoading}
            onChange={(e) => handleChange(e)}
          />

          {submitErrorText}
          {warningText}

          <SubmitButton
            disabled={
              isLoading ||
              signUpData.password !== signUpData.passwordConfirmation
            }
          >
            {buttonContent}
          </SubmitButton>
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
