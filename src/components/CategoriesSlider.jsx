import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IconContext } from "react-icons/lib";

import {
  BsLaptop,
  BsController,
  BsSmartwatch,
  BsPhone,
  BsCamera,
  BsTv,
} from "react-icons/bs";

import { UserContext } from "../contexts/UserContext";
import { CategoryContext } from "../contexts/CategoryContext";

import {
  Slider,
  Category,
  Circle,
  Name,
} from "../assets/styles/categoriesSliderStyles";

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);
  const { userDatas } = useContext(UserContext);
  const { setCategoryName } = useContext(CategoryContext);
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
    const { token } = userDatas;
    const URL = "http://localhost:5000/categories";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);
    promise
      .then((res) => {
        setCategories(res.data);
      })
      .catch(handleError);
  }, []);

  function handleOnClick(category) {
    setCategoryName(category.name);
    navigate(`/categories/${category._id}`);
  }

  function renderCategoryIcon(category) {
    switch (category.icon) {
      case "notebook":
        return <BsLaptop />;
      case "gamer":
        return <BsController />;
      case "accessories":
        return <BsSmartwatch />;
      case "cellphone":
        return <BsPhone />;
      case "camera":
        return <BsCamera />;
      case "television":
        return <BsTv />;
      default:
        return <BsLaptop />;
    }
  }

  function renderCategories() {
    if (categories) {
      return categories.map((category) => (
        <Category key={category._id}>
          <Circle onClick={() => handleOnClick(category)}>
            <IconContext.Provider value={{ color: "#ffffff", size: "30px" }}>
              {renderCategoryIcon(category)}
            </IconContext.Provider>
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
