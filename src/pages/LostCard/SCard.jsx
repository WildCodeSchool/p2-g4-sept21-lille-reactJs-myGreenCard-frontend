import styled from 'styled-components';

const SCard = styled.article`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 80vw;
  height: 20vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  -webkit-box-shadow: 0px 7px 12px -3px #000000;
  box-shadow: 0px 7px 12px -3px #000000;
  .hLogo {
    display: flex;
    justify-content: space-between;
    height: 5vh;
    margin: 0 2vw 0 2vw;
    img {
      height: 30px;
    }
    padding: 1vw;
  }
  .cMain {
    height: 12vh;
    display: flex;
    flex-direction: row;
    width: 80vw;
    img {
      height: 12vh;
      border: 2px solid black;
      background-color: white;
      margin: 0 3vw 0 1vw;
    }
    .userInfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 2vw;
      p {
        margin-top: 15px;
        font-size: 12px;
      }
      p,
      h3 {
        color: black;
      }
    }
  }
  .cNumb {
    height: 3vh;
    width: 80vw;
    align-items: flex-end;
    display: flex;
    flex-direction: row-reverse;
    margin-left: -5vw;
  }
`;
export default SCard;
