import styled from 'styled-components';

const SHeader = styled.header`
  height: 75px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    display: block;
    border-bottom: 3px solid rgb(0, 0, 0);
    width: 70%;
    bottom: -10px;
    position: absolute;
    border-radius: 15px;
    right: 15%;
    left: 15%;
  }
  img {
    height: 60px;
    width: auto;
  }
  .logo {
    width: 40vw;
    height: auto;
  }
`;

export default SHeader;