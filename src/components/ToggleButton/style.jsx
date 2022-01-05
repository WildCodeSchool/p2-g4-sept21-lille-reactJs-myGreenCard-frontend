import styled from 'styled-components';

const SToggleButton = styled.button`
<<<<<<< HEAD
  margin-top: 0.5vh;
  height: 35px;
  width: 70px;
=======
  height: calc(35px * (${(props) => props.size}));
  width: calc(70px * (${(props) => props.size}));
>>>>>>> d35c29b414c532f2e5de085e52e08e33aecd7429
  background-color: black;
  border-radius: 100px;
  position: relative;

  span {
    content: '';
    position: absolute;
    top: calc(2px * (${(props) => props.size}));
    left: calc(2px * (${(props) => props.size}));
    width: calc(30px * (${(props) => props.size}));
    height: calc(30px * (${(props) => props.size}));
    border-radius: 50%;
    background: white;
  }
  &.dark {
    background: white;
    span {
      background: black;
      left: calc(38px * (${(props) => props.size}));
    }
  }
`;

export default SToggleButton;
