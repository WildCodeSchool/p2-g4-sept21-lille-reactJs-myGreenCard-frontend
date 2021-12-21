import styled from 'styled-components';

const SToggleButton = styled.button`
  margin-top: 30vh;
  height: 35px;
  width: 70px;
  background-color: black;
  border-radius: 100px;
  position: relative;

  span {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: white;
  }
`;

export default SToggleButton;
