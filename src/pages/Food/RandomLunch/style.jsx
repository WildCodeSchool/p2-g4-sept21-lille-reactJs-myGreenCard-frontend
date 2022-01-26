import styled from 'styled-components';

const SRandomLunch = styled.section`
  button {
    &.dark {
      background: black;
      span {
        background: white;
      }
    }
  }
  h1 {
    font-weight: bold;
    text-align: center;
  }
  h2 {
    margin-top: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .randomLunch {
    text-align: center;
  }
  .randomTime {
    margin-top: 5vh;
    height: 25vh;
    text-align: center;
    img {
      width: 25vw;
    }
  }
  .clock {
    height: 15vh;
  }
  .waiting {
    height: 5vh;
  }
  .guests {
    width: 160px;
    text-align: center;
    font-size: 15px;
  }
  .name {
    margin-top: 10px;
    margin-bottom: 7px;
  }
  .users {
    height: 50vh;
    width: 90vw;
    margin: 5vh 0 3vh 4vh;
    display: flex;
    flex-flow: row wrap;
    img {
      height: 26vw;
      position: relative;
    }
  }
  .currUser {
  }
  .circle {
    width: 25px;
    height: 25px;
    border-radius: 20px;
    background: orange;
    position: absolute;
    margin-left: 10px;
    z-index: 1;
  }
  .button {
    text-align: center;
    button {
      box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
        rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
        rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
      background-color: grey;
      color: black;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      letter-spacing: 1px;
      border: none;
      border-radius: 10px;
      padding: 15px;
      cursor: pointer;
    }
  }
  .doNotDisturb {
    img {
      width: 80vw;
      margin-left: 40px;
    }
  }
  .noRandomLunch {
    line-height: 200px;
  }
  h3 {
    text-align: center;
  }
`;

export default SRandomLunch;
