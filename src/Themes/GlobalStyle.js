import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body{
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
}
button{
  border : none;
  background: none;
  cursor: pointer;
  color: white;
}
h1,h2,h3,p,span{
  font-family: 'Montserrat', sans-serif;
}

`;

export default GlobalStyles;
