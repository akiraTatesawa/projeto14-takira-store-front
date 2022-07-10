import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProfilePage from "../pages/ProfilePage";

import { UserContext } from "../contexts/UserContext";
import { CategoryContext } from "../contexts/CategoryContext";
import { CartContext } from "../contexts/CartContext";

function App() {
  const [categoryName, setCategoryName] = useState("");
  const [cartItems, setCartItems] = useState([]);

  function searchUserDataLocalStorage() {
    const userDataLocal = JSON.parse(localStorage.getItem("userDatas"));
    if (userDataLocal) {
      return userDataLocal;
    }
    return { name: "", token: "" };
  }

  const navigate = useNavigate();
  const location = useLocation();

  const [userDatas, setUserDatas] = useState(searchUserDataLocalStorage);

  useEffect(() => {
    if (
      userDatas.token.length !== 0 &&
      (location.pathname === "/" || location.pathname === "/sign-up")
    ) {
      navigate("/home");
    }
    if (userDatas.token.length === 0 && location.pathname !== "/sign-up") {
      navigate("/");
    }
  }, []);

  return (
    <UserContext.Provider value={{ userDatas, setUserDatas }}>
      <CategoryContext.Provider value={{ categoryName, setCategoryName }}>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/categories/:categoryId" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/shopping-cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </CartContext.Provider>
      </CategoryContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
