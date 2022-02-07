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
  }
  .badge {
    font-weight: bold;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .wallet {
    display: flex;
    flex-direction: column;
    width: 40vw;
    justify-content: space-around;
    height: 140px;
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
  img {
    width: 120px;
    object-fit: contain;
  }
  p {
    width: 50vw;
  }
  .menu {
    height: 180px;
    font-weight: bold;
    position: relative;
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
  .foodIcon {
    display: flex;
    justify-content: center;
    width: 0px;
    height: 150px;
    position: absolute;
    right: 30%;
    bottom: 10%;
    img {
      margin-left: 35px;
    }
  }
  .dinnersReady {
    height: 30px;
    text-decoration: underline ${(props) => props.theme.text};
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
    position: relative;
    display: flex;
    font-weight: bold;
    height: 150px;
    width: 80vw;
  }
  .meetingReservation {
    display: flex;
    flex-direction: column;
    height: 100px;
  }
  .meetingReservation h3 {
    width: 50vw;
  }
  .meetingReservation p {
    font-weight: normal;
    height: 100px;
    width: 30vw;
    margin-top: 10px;
  }
  .meetingRoomPicture {
    position: absolute;
    left: 55%;
    bottom: 10%;
  }
  .meetingRoomPicture img {
    rotate: 90deg;
  }
  .furnitures {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    height: 150px;
    p {
      width: 40vw;
    }
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
    position: relative;
  }
  .lostCard p {
    width: 130px;
  }
  .card {
    height: 40px;
    width: 40vw;
  }
  .unactivCard {
    font-weight: normal;
    height: 100px;
    width: 25vw;
  }
  .pictureCard {
    display: flex;
    height: 150px;
    justify-content: center;
    align-items: center;
    img {
      width: 35vw;
      height: 100px;
    }
  }
`;

export default SHome;
