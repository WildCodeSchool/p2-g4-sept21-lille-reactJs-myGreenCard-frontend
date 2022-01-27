import styled from 'styled-components';

const SOffice = styled.main`
  min-height: 100vh;
  margin-top: 40px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 10vh;
    color: white;
    text-decoration: underline;
    font-weight: bold;
  }

  h2 {
    padding-top: 10vh;
    margin-left: 5vw;
    font-weight: bold;
  }
  .button1 {
    margin-left: 16vw;
    margin-top: 5.5vh;
  }

  .button2 {
    margin-left: 40.5vw;
    margin-top: 5.6vh;
  }

  .button3 {
    margin-left: 58.26vw;
    margin-top: 6.3vh;
  }

  .button4 {
    margin-left: 85.4vw;
    margin-top: 3.4vh;
  }
  .button5 {
    margin-left: 89vw;
    margin-top: 10.2vh;
  }

  .button6 {
    margin-left: 42.5vw;
    margin-top: 23.6vh;
  }
  /* 
  .buttonUser {
    width: 50px;
    height: 50px;
    background: inherit;
    background-size: 50px 50px;
    background-position: center;
    background-image: url(${(props) => props.avatar});
  } */
  .plan {
    background-size: 100%;
    background-repeat: no-repeat;
    height: 35vh;
    width: auto;
  }

  .rowProfiles {
    display: flex;
    align-items: center;
  }

  .circle1 {
    width: 16px;
    height: 16px;
    border-radius: 20px;
    background: #44df44;
    position: absolute;
    margin-left: 10px;
    z-index: 1;
  }

  .rowProfiles p {
    font-size: 11px;
    font-weight: bold;
  }

  .MuiAvatarGroup-root {
    margin-left: 15px;
  }

  /* Slider */

  .swiper-container {
    width: 100vw;
    height: 300px;
    .swiper-slide {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      background: #fff;
      h3 {
        font-size: 1.2rem;
        margin: 15px;
      }
      div.slots {
        width: 70%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        button {
          font-size: 1rem;
          width: 80px;
          background: #e7f6fdef;
          margin: 15px;
          padding: 5px;
          border-radius: 5px;
          -webkit-box-shadow: 0px 7px 12px -3px #afafaf;
          box-shadow: 0px 7px 12px -3px #afafaf;
          &.reserved {
            background: grey;
          }
        }
      }
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: black;
    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export default SOffice;
