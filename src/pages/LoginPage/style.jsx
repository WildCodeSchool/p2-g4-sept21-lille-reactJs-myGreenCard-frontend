import styled from 'styled-components';

const SLogingPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .background {
    border-radius: 20px 20px 10px 10px;
    width: 95vw;
  }
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
    border-radius: 20px 20px 10px 10px;
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
    button.MuiTab-root {
      color: ${(props) => props.theme.text};
    }
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
  a {
    margin-top: 7vh;
  }
  .darkThemeBackground {
    background-color: #303134;
  }
  .lightThemeBackground {
    background-color: white;
  }
  .darkThemeInput {
    background: black;
    border-bottom: 2px solid #303134;
    color: white;
  }
  .letsGo {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    background-color: white;
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    border: none;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    margin-top: 10vh;
    width: 50vw;
  }
  .css-1ujykiq-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: black;
  }
  .log {
    height: 125px;
    width: 125px;
    border-radius: 50%;
    background-color: grey;
    margin: 10px;
  }
`;

export default SLogingPage;
