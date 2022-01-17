import styled from 'styled-components';

const SSupplies = styled.main`
  .container {
    width: 80vw;
    display: block;
    margin: auto;
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
      display: flex;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      padding-top: 50px;
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
