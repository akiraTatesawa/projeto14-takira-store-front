import axios from "axios";
import React, { useState, useContext } from "react";
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
import { UserContext } from "../contexts/UserContext";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const { setUserDatas } = useContext(UserContext);

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
    const URL = `${process.env.REACT_APP_API_BASE_URL}/sign-in`;
    e.preventDefault();
    setIsLoading(true);

    const promise = axios.post(URL, signInData);

    promise
      .then((res) => {
        localStorage.setItem("userDatas", JSON.stringify(res.data));
        setUserDatas(res.data);
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
            autoComplete="off"
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
          <span>N??o tem uma conta? Cadastre-se j??!</span>
        </Link>
      </AuthContent>
    </AuthContainer>
  );
}
