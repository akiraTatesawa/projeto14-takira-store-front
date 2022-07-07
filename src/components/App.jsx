import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
