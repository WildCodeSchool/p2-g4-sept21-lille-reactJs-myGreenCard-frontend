import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body{
  background: ${({ theme }) => theme.background}; 
  color: ${({ theme }) => theme.text};
}

p,h1,h2,h3{
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
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

//HOME //FOOD
.darkThemeBackground {
    background-color: #303134;
  }

//FOODPAGE
  .darkThemeMode {
  overflow: contain;
  position: relative;
  aspect-ratio: 2.1/3.5;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin: 40px 30px 40px 30px;
  background-color: black;
  }
  .blackBackground {
    background-color: black;
  }
`;

export default GlobalStyles;
