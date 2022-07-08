import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";

import CategoryContext from "../contexts/CategoryContext";

function App() {
  const [categoryName, setCategoryName] = useState("");

  return (
    /* eslint-disable-next-line react/jsx-no-constructed-context-values */
    <CategoryContext.Provider value={{ categoryName, setCategoryName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/categories/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </CategoryContext.Provider>
  );
}

export default App;
