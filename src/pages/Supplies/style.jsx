import styled from 'styled-components';

const SSupplies = styled.main`
  .container {
    width: 80vw;
    display: block;
    margin: auto;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    font-weight: bold;
    height: 8vh;
  }

  h2 {
    font-weight: bold;
  }

  p {
    font-size: small;
    color: #5f5f5ffb;
  }

  .container {
    img {
      height: 15vh;
    }
    .kitCovid {
      display: flex;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      padding-top: 50px;
    }
    .pencils {
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      padding-top: 50px;
    }
    .notebook {
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      padding-top: 50px;
    }
    .earphones {
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      padding-top: 50px;
    }
    .stabilo {
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      padding-top: 50px;
    }
    .postit {
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      padding-top: 50px;
      margin-bottom: 30px;
    }
    .description {
      margin-left: auto;
      margin-right: auto;
      p {
        padding-top: 10px;
      }
    }
  }
`;

export default SSupplies;
