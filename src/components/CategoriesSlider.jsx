/* eslint no-underscore-dangle: 0 */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsLaptop } from "react-icons/bs";

import {
  Slider,
  Category,
  Circle,
  Name,
} from "../assets/styles/categoriesSliderStyles";

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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
    const promise = axios.get(URL);

    promise
      .then((res) => {
        setCategories(res.data);
      })
      .catch(handleError);
  }, []);

  function handleOnClick(category) {
    navigate(`/categories/${category._id}`, {
      state: { categoryName: category.name },
    });
  }

  function renderCategories() {
    if (categories) {
      return categories.map((category) => (
        <Category key={category._id}>
          <Circle onClick={() => handleOnClick(category)}>
            <BsLaptop size={30} style={{ color: "#fff" }} />
          </Circle>
          <Name>{category.name}</Name>
        </Category>
      ));
    }
    return null;
  }

  const categoriesContent = renderCategories();

  return <Slider>{categoriesContent}</Slider>;
}
