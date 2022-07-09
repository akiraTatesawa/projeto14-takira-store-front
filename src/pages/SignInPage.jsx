import axios from "axios";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

import {
  AuthContainer,
  SubmitButton,
  WarningText,
  Title,
  AuthContent,
  Input,
} from "../assets/styles/authStyles";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleError(err) {
    const { status } = err.response;

    console.log(err.response);
    setSignInData({
      ...signInData,
      email: "",
      password: "",
    });

    if (status === 422) {
      setErrorText("Preencha os campos corretamente!");
    } else {
      setErrorText("Houve um erro ao realizar o login, tente novamente");
    }

    setIsLoading(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
    setErrorText(null);
  }

  function submitUserData(e) {
    const URL = "http://localhost:5000/sign-in";
    e.preventDefault();
    setIsLoading(true);

    const promise = axios.post(URL, signInData);

    promise
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch(handleError);
  }

  function renderButtonContent() {
    if (isLoading) {
      return <ThreeDots color="#FFFFFF" />;
    }
    return "Entrar";
  }

  function renderSubmitErrorText() {
    if (errorText) {
      return <WarningText>{errorText}</WarningText>;
    }
    return null;
  }

  const submitErrorText = renderSubmitErrorText();
  const buttonContent = renderButtonContent();

  return (
    <AuthContainer>
      <AuthContent>
        <Title>TAKIRA</Title>

        <form onSubmit={(e) => submitUserData(e)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={signInData.email}
            maxLength={30}
            required
            disabled={isLoading}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            value={signInData.password}
            required
            disabled={isLoading}
            onChange={(e) => handleChange(e)}
          />

          {submitErrorText}

          <SubmitButton disabled={isLoading}>{buttonContent}</SubmitButton>
        </form>

        <Link to="/sign-up">
          <span>Não tem uma conta? Cadastre-se já!</span>
        </Link>
      </AuthContent>
    </AuthContainer>
  );
}
