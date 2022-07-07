import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsLaptop } from "react-icons/bs";

import {
  SliderContainer,
  Category,
  Icon,
  Name,
} from "../assets/styles/categoriesSliderStyles";

export default function CategoriesSlider() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  // };

  function handleError(err) {
    const { status } = err.response;

    console.log(err.response);

    if (status === 422) {
      alert("Não autorizado!");
    } else {
      alert("Houve um erro ao obter as categorias, faça login novamente!");
    }
  }

  useEffect(() => {
    const URL = "http://localhost:5000/categories";
    // const promise = axios.get(URL, config);
    const promise = axios.get(URL);

    promise
      .then((res) => {
        setCategories(res.data);
      })
      .catch(handleError);
  }, []);

  return (
    <SliderContainer>
      {categories.length > 0
        ? categories.map((category) => (
            <Category key={category.id}>
              <Icon onClick={() => navigate(`/products/${category.icon}`)}>
                <BsLaptop size={30} style={{ color: "#fff" }} />
              </Icon>
              <Name>{category.name}</Name>
            </Category>
          ))
        : null}
    </SliderContainer>
  );
}
