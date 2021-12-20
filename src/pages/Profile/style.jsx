import styled from 'styled-components';

const SProfilPage = styled.section`
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 30px;
  }
  h2 {
    font-weight: Bold;
    height: 30px;
  }
  p {
    font-size: 15px;
  }
  article {
    height: 200px;
    width: 80vw;
    margin: 20px 0 10px 0px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 7px 12px -3px #000000;
    box-shadow: 0px 7px 12px -3px #000000;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .paimentLogo {
    display: flex;
    flex-direction: row;
    height: 20vh;
    justify-content: space-between;
    align-items: center;
    img {
      width: 25vw;
      height: 35px;
    }
  }

  .recharge {
    display: flex;
    height: 25vh;
    justify-content: space-around;
    align-items: center;
  }

  .logo {
    display: flex;
    flex-direction: row;
    width: 80vw;
    align-items: center;
    justify-content: space-between;
  }
  .wallet {
    display: flex;
    flex-direction: column;
    width: 40vw;
    justify-content: space-around;
    height: 120px;

    img {
      width: 40vw;
    }
  }

  .card {
    display: flex;
    width: 40vw;
    justify-content: center;
    img {
      width: 35vw;
    }
  }
`;

export default SProfilPage;
