import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories/:categoryId" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
