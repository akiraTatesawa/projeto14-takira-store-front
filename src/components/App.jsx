import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

import CategoryContext from "../contexts/CategoryContext";
import CartContext from "../contexts/CartContext";
import CheckoutPage from "../pages/CheckoutPage";

function App() {
  const [categoryName, setCategoryName] = useState("");
  const [cartItems, setCartItems] = useState([]);

  return (
    /* eslint-disable-next-line react/jsx-no-constructed-context-values */
    <CategoryContext.Provider value={{ categoryName, setCategoryName }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/categories/:categoryId" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/shopping-cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
