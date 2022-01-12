import styled from 'styled-components';

const SLogingPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .theme {
    display: flex;
    flex-direction: row;
    height: 2vh;
    width: 95vw;
    margin: 0.5vh 15px 2vh 0px;
    justify-content: flex-end;
    font-size: 8px;
    align-items: center;
    letter-spacing: 1px;
    p {
      padding: 2px;
    }
  }
  p {
    align-items: right;
  }
  .userCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    margin: 0vh 0 6vh 0;
  }
  .userCard img {
    margin-top: 1vh;
  }
  .MuiBox-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95vw;
    margin-bottom: 5vh;
    border-radius: 0px 0px 10px 10px;
    -webkit-box-shadow: 0px 7px 12px -3px #000000;
    box-shadow: 0px 7px 12px -3px #000000;
  }
  .MuiTabs-root {
    width: 100%;
    min-height: 30px;
  }
  .MuiTabs-scroller {
    height: 30px;
  }
  .MuiTabs-flexContainer {
    height: 35px;
  }
  .MuiTabs-indicator {
    margin-left: 10.15vw;
    border-radius: 25px;
  }
  .MuiButtonBase-root {
    font-size: 4vw;
    width: 120px;
    min-height: 30px;
    text-transform: none;
    font-family: Montserrat;
    letter-spacing: 0;
    padding: none;
  }
  .MuiTabPanel-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: none;
    p {
      align-items: left;
      display: flex;
      width: 75vw;
      margin-top: 2vh;
    }
  }
  img {
    width: 60vw;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2vh;
  }
  input {
    border: none;
    border-bottom: 1px solid black;
    width: 75vw;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
  a {
    margin-top: 7vh;
  }

  .darkThemeBackground {
    background-color: #303134;
    border-radius: 20px 20px 10px 10px;
    width: 95vw;
  }

  .lightThemeBackground {
    background-color: white;
    border-radius: 20px 20px 10px 10px;
    width: 90vw;
    height: 500px;
  }

  .darkThemeInput {
    background: black;
    border-bottom: 2px solid #303134;
  }
`;

export default SLogingPage;
