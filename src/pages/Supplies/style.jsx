import styled from 'styled-components';

const SSupplies = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  .container {
    width: 90vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
      height: 12vh;
    }
    .supply {
      border-radius: 10px;
      display: flex;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      background-color: ${(props) => props.theme.secondBackground};
      margin-top: 20px;
      align-items: center;
    }
    .description {
      margin-left: 20px;
      p {
        padding-top: 10px;
        width: 50vw;
      }
      h2 {
        margin: 0;
        width: 50vw;
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
