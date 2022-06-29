import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import FontStyles from "./styles/fontStyles";

const theme = {
  colors: {
    main: "#d9c1bb",
    darkMain: "#D6CCC2",
    linen: "#F5EBE0",
    darker: "#A1869E",
    magnolia: "#F7F0F5",
    grey: "#565254",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
