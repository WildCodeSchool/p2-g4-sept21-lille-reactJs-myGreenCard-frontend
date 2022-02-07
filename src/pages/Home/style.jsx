import styled from 'styled-components';

const SHome = styled.section`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-left: 72vw;
    &.dark {
      background: white;
    }
  }
  button.init {
    width: 15px;
    height: 15px;
    background: #ebdcdc;
    border-radius: 50%;
    margin: 10px;
    margin-left: calc(100% / 2);
    margin-right: calc(100% / 2);
  }
  margin: 1.75rem;
  article {
    width: 80vw;
    margin: 20px 0 30px 0px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 7px 12px -3px #000000;
    box-shadow: 0px 7px 12px -3px #000000;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.secondBackground};
    font-weight: bold;
    img {
      width: 120px;
      object-fit: contain;
      margin-left: 10px;
    }
    p {
      font-weight: normal;
      line-height: 17px;
    }
    h3 {
      width: 80vw;
    }
  }
  .badge {
    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
    }
    .wallet {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 15px;

      a {
        margin-bottom: 10px;
        img {
          margin: 0;
        }
      }
    }
    .eazyCard {
      padding-bottom: 10px;
    }
  }
  .menu {
    .mealList {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10px;
    }
    .description {
      margin-top: 15px;
      .dinnersReady {
        margin-top: 15px;
        text-decoration: underline ${(props) => props.theme.text};
      }
    }
  }
  .office {
    .chooseYourOffice {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10px;
      p {
        margin-top: 15px;
      }
    }
  }
  .meeting {
    .meetingRoomPicture {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        margin-top: 25px;
      }
      img {
        rotate: 90deg;
      }
    }
  }
  .furnitures {
    .pictureFurniture {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10px;
      p {
        font-weight: normal;
        margin-top: 15px;
      }
    }
  }
  .lostCard {
    .pictureCard {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10px;
      margin-bottom: 30px;
      p {
        margin-top: 15px;
      }
    }
  }
  .chat {
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        margin-top: 25px;
      }
    }
  }

  @media screen and (max-width: 375px) and (max-height: 667px) {
    .shop {
      p {
        width: 47vw;
      }
    }
  }
`;

export default SHome;
