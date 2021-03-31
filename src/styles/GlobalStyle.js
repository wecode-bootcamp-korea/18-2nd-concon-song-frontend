import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  box-sizing: border-box;
  font-family: "Nanum Gothic", sans-serif;
  margin: 0;
  padding: 0;

a {
  text-decoration: none;
}

button,
input {
  outline: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
