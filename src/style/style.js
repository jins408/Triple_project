import { createGlobalStyle } from "styled-components";

export const colors = {
  0: "rgb(58, 58, 58)",
  1: "rgba(58, 58, 58, 0.7)",
  2: "rgba(58, 58, 58, 0.8)",
};

export const GlobalStyles = createGlobalStyle`
  body {
    min-width: 1200px;
    font-family: sans-serif;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;
