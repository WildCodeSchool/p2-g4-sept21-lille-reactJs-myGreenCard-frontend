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

`;

export default GlobalStyles;
