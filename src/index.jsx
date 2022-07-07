import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
