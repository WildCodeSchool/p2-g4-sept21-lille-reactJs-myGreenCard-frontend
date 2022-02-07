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
    min-height: 140px;
    margin: 20px 0 30px 0px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 7px 12px -3px #000000;
    box-shadow: 0px 7px 12px -3px #000000;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.secondBackground};
  }
  .badge {
    font-weight: bold;
    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
    }
    .wallet {
      display: flex;
      flex-direction: column;
      width: 40vw;
      justify-content: space-around;
      height: 120px;
      img {
        height: 40px;
        width: 40vw;
      }
    }
    .eazyCard {
      display: flex;
      justify-content: center;
      img {
        width: 35vw;
        height: 100px;
      }
    }
  }
  img {
    width: 120px;
    object-fit: contain;
  }
  p {
    width: 40vw;
  }
  .menu {
    font-weight: bold;
    .meal {
    }
    .mealList {
      font-weight: normal;
      display: flex;
      height: 100px;
      margin-top: 20px;
    }
    .description {
      width: 55vw;
    }
    .foodIcon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dinnersReady {
      height: 30px;
      text-decoration: underline ${(props) => props.theme.text};
    }
  }
  .office {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    .reservation {
      width: 40vw;
      p {
        font-weight: normal;
        width: 30vw;
        margin-top: 20px;
      }
    }
  }
  .meeting {
    display: flex;
    font-weight: bold;
    flex-direction: row;
    .meetingReservation {
      display: flex;
      flex-direction: column;
      h3 {
        width: 40vw;
      }
      p {
        font-weight: normal;
        width: 30vw;
        margin-top: 20px;
      }
    }
    .meetingRoomPicture {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .meetingRoomPicture img {
      rotate: 90deg;
    }
  }
  .furnitures {
    display: flex;
    flex-flow: row wrap;
    font-weight: bold;
    .order {
      width: 40vw;
      p {
        font-weight: normal;
        margin-top: 20px;
      }
    }
    .pictureFurniture {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .lostCard {
    display: flex;
    flex-direction: row;
    font-weight: bold;

    .card {
      width: 40vw;
      p {
        font-weight: normal;
        margin-top: 20px;
      }
    }
    .pictureCard {
      display: flex;
      img {
        img {
          width: 35vw;
          height: 100px;
        }
      }
    }
  }
  .chat {
    display: flex;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: column;
      width: 40vw;
      h3 {
        font-weight: bold;
      }
      p {
        margin-top: 20px;
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
