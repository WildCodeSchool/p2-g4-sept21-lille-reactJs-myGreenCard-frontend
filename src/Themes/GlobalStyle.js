import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body{
  background: ${({ theme }) => theme.background}; 
  color: ${({ theme }) => theme.text};
  &.darkThemeBackground {
    background: ${({ theme }) => theme.secondBackground};
  }
  font-family: 'Montserrat', sans-serif;
}

p,h1,h2,h3, button,input{
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.text};
  
}

h1{
  font-size: 30px;
  font-weight: 500;
  margin: 30px;
}

h2{
  font-size: 25px;
  margin: 20px;
}

h3{
  font-size: 20px;
}

a {
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  color:black;
}

button{
  color: black;
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
  cursor: pointer;
}

`;

export default GlobalStyles;
