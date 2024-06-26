import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `

body {
  margin: 0;
  color: black;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: black;
  font-weight: lighter;
}

* {
    box-sizing: border-box ;
}

`