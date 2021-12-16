import styled from 'styled-components';

const SHeader = styled.header`
  height: 75px;
  width: 100vw;
  display: flex;
  justify-content: center;
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
  }
  img {
    height: 60px;
    width: auto;
  }
`;

export default SHeader;
