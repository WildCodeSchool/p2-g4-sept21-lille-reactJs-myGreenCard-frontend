import styled from 'styled-components';

const SHeader = styled.header`
  height: 75px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    display: block;
    border-bottom: 3px solid ${(props) => props.theme.text};
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
  img.home {
    height: 100px;
    width: auto;
  }
  .logo {
    width: 40vw;
    height: auto;
  }
  .profile {
    display: flex;
    height: 100px;
    width: 100px;
    justify-content: center;
    align-items: center;
  }
`;

export default SHeader;
