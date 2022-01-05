import styled from 'styled-components';

const SMenu = styled.nav`
  font-family: 'Montserrat', sans-serif;
  li {
    color: black;
    line-height: 50px;
  }

  .bm-burger-button {
    position: fixed;
    width: 35px;
    height: 22px;
    left: 15px;
    top: 18px;
  }

  .menu {
    height: 10vh;
    position: fixed;
    top: 0;
    z-index: 1000;
    margin-bottom: 1vh;
    width: 100%;
    background-size: 240px 1200px;
  }

  /* Customize library CSS in order to fit with the wireframe */

  .bm-burger-bars {
    background: #000000;
    width: 32px;
    height: 10%;
  }

  .bm-cross-button {
    height: 40px;
    width: 40px;
    margin-right: 30px;
  }

  .bm-cross {
    position: absolute;
    background: #161616;
    height: 40px;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100px;
  }

  .bm-menu {
    background: #eeedede8;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    height: 600px;
    color: #fff;
    padding: 0.8em;
  }

  .bm-item {
    display: inline-block;
  }

  .bm-overlay {
    background: #9fa0a1;
    height: 100%;
  }

  .menu li {
    margin-top: 2vh;
  }
`;

export default SMenu;
