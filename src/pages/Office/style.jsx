import styled from 'styled-components';

const SOffice = styled.main`
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
    margin-left: 5vw;
    font-weight: bold;
  }

  .button1 {
    margin-left: 16.2vw;
    margin-top: 5.6vh;
  }

  .button2 {
    margin-left: 40.5vw;
    margin-top: 5.6vh;
  }

  .button3 {
    margin-left: 58.5vw;
    margin-top: 6.4vh;
  }

  .button4 {
    margin-left: 85.4vw;
    margin-top: 3.4vh;
  }
  .button5 {
    margin-left: 89.4vw;
    margin-top: 10.3vh;
  }
  .button6 {
    margin-left: 42.6vw;
    margin-top: 23.7vh;
  }
  .plan {
    background-size: 100%;
    background-repeat: no-repeat;
    height: 35vh;
    width: auto;
  }
  .rowProfiles {
    margin-left: 20px;
    display: flex;
    align-items: center;
    p {
      margin-left: 20px;
    }
  }
  .rowProfiles {
    margin-top: 20px;
    p {
      font-size: 11px;
      font-weight: bold;
    }
  }
  /* Slider */
  .swiper-container {
    width: 100vw;
    height: 280px;
    .swiper-slide {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      background-color: ${(props) => props.theme.background};
      h3 {
        font-size: 1.2rem;
        margin: 15px;
        :first-letter {
          text-transform: uppercase;
        }
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
          font-size: 1.1rem;
          width: 110px;
          height: 35px;
          background: #ececec;
          margin: 15px;
          padding: 5px;
          border-radius: 5px;
          -webkit-box-shadow: 0px 7px 12px -3px black;
          box-shadow: 0px 7px 12px -3px black;
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
    color: ${(props) => props.theme.text};
    top: 60%;
    right: 7px;
    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 375px) and (max-height: 667px) {
    .button1 {
      margin-top: 6.8vh;
    }
    .button2 {
      margin-top: 6.8vh;
    }
    .button3 {
      margin-top: 7.6vh;
    }
    .button4 {
      margin-top: 4vh;
    }
    .button5 {
      margin-top: 12.5vh;
    }
    .button6 {
      margin-top: 28.8vh;
      margin-left: 23.65vh;
    }
    .plan {
      height: 40vh;
    }
    .swiper-container {
      .swiper-slide {
        div.slots {
          button {
            width: 110px;
          }
        }
      }
    }
  }
`;

export default SOffice;
