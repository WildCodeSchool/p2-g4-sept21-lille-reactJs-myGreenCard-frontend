import styled from 'styled-components';

const SSupplies = styled.main`
  .container {
    min-width: 90vw;
    display: block;
  }
  h3 {
    font-weight: bold;
  }
  p {
    font-size: small;
    color: #5f5f5ffb;
  }
  section {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .container {
    img {
      height: 15vh;
    }
    .supply {
      border-radius: 10px;
      display: flex;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      padding-top: 50px;
      background-color: ${(props) => props.theme.secondBackground};
      margin-top: 20px;
    }
    .description {
      p {
        padding-top: 10px;
        margin-left: 20px;
      }
    }
  }
  .watchCart {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
`;

export default SSupplies;
