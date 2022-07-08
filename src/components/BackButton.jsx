import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BackButton({ text }) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <BsChevronLeft />
      {text}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  padding: 0;
  color: var(--brand-sec);
  font-size: 1em;
  background-color: #ffffff;
`;
