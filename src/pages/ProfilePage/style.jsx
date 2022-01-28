import styled from 'styled-components';

const SProfilPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .meetings {
    height: auto;
  }
  h2 {
    font-weight: Bold;
    height: 30px;
  }
  p {
    font-size: 1rem;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    border-radius: 80px;
    background-color: #eeedede8;
    margin-bottom: 10px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    line-height: 20px;
    div {
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid grey;
      aspect-ratio: 1/1;
      width: 100px;
      height: 100px;
    }
    img {
      height: 100%;
    }
    p {
      width: 180px;
      text-align: center;
    }
  }
  article {
    height: 200px;
    width: 85vw;
    margin: 20px 0 10px 0px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 7px 12px -3px #000000;
    box-shadow: 0px 7px 12px -3px #000000;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .money {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
      border: none;
      border-radius: 10px;
      height: 50px;
      cursor: pointer;
      width: 30vw;
      -webkit-box-shadow: 0px 7px 12px -3px #000000;
      box-shadow: 0px 7px 12px -3px #000000;
    }
  }
  .badge {
    height: 150px;
  }
  .paymentLogo {
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
  .refill {
    display: flex;
    height: 25vh;
    justify-content: space-around;
    align-items: center;
  }
  .logo {
    display: flex;
    flex-direction: row;
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
  .resume {
    height: auto;
    width: 85vw;
    border-radius: 10px;
    -webkit-box-shadow: 0px 7px 12px -3px #000000;
    box-shadow: 0px 7px 12px -3px #000000;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .profilCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    width: 95vw;
    margin-bottom: 3vh;
    border-radius: 0px 0px 10px 10px;
    -webkit-box-shadow: 0px 7px 12px -3px #000000;
    box-shadow: 0px 7px 12px -3px #000000;
    .head {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90vw;
      img {
        height: 60px;
        width: auto;
        margin-top: 0;
      }
      button {
        margin-right: 2vw;
      }
    }
    img {
      width: 60vw;
      margin-top: -0.75vh;
    }
    .userCard {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 30vh;

      p {
        margin-top: 1vh;
      }
    }
  }
`;

export default SProfilPage;
