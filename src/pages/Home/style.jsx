import styled from 'styled-components';

const SHome = styled.section`
  button {
    float: right;
    margin-top: -0.5em;
    margin-bottom: 1em;
    &.dark {
      background: white;
      span {
        background: black;
        left: 38px;
      }
    }
  }

  margin: 1.75rem;

  article {
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

  img {
    height: 140px;
    object-fit: contain;
  }

  .menu {
    height: 180px;
    font-weight: bold;
  }

  .meal {
    height: 40px;
  }

  .mealList {
    font-weight: normal;
    display: flex;
    height: 100px;
  }

  .description {
    width: 55vw;
  }

  .dishes {
    display: flex;
    flex-flow: row wrap;
    align-items: right;
    height: 100px;
    width: 70px;
    justify-content: space-between;

    img {
      border-radius: 45px;
      object-fit: cover;
      height: 40px;
      width: 30px;
    }
  }

  .dinnersReady {
    height: 30px;
    text-decoration: underline;
  }

  .office {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height: 150px;
  }

  .reservation {
    width: 40vw;
  }

  .chooseYourOffice {
    font-weight: normal;
    height: 100px;
    width: 30vw;
  }

  .meeting {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height: 150px;
  }

  .roomReservation {
    width: 40vw;
  }

  .meetingReservation {
    font-weight: normal;
    height: 100px;
    width: 30vw;
  }

  .furnitures {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height: 150px;
  }

  .order {
    height: 50px;
    width: 40vw;
  }

  .shop {
    font-weight: normal;
    height: 100px;
    width: 30vw;
  }

  .picturefurniture {
    height: 140px;
    width: 40vw;
    img {
      height: 140px;
      width: 40vw;
    }
  }

  .lostCard {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height: 150px;
  }

  .card {
    height: 40px;
    width: 20vw;
  }

  .unactivCard {
    font-weight: normal;
    height: 100px;
    width: 25vw;
  }

  .pictureCard {
    img {
      width: 50vw;
    }
  }
`;

export default SHome;
