import styled from 'styled-components';

const SToggleButton = styled.button`
  height: calc(35px * (${(props) => props.size}));
  width: calc(70px * (${(props) => props.size}));
  background: ${(props) => props.trueColor};
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
    background: ${(props) => props.truePoint};
    transition: 0.3s linear;
  }
  &.dark {
    background: ${(props) => props.falseColor};
    span {
      background: ${(props) => props.falsePoint};
      left: calc(38px * (${(props) => props.size}));
    }
  }
`;

export default SToggleButton;
