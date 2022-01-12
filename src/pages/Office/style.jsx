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

  .plan {
    height: 40vh;
    width: 90%;
    margin-left: 5vw;
  }

  .rowProfiles {
    display: flex;
    align-items: center;
  }

  .circle {
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
    margin: 25px 0;
    width: 100vw;
    height: 200px;
    display: flex;
    justify-content: center;
  }

  h3 {
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    margin: 15px;
  }

  div.slots {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    span {
      font-size: 1rem;
      width: 80px;
      background: #e7f6fdef;
      margin: 5px;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0px 6px 5px -3px #afafaf;
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
