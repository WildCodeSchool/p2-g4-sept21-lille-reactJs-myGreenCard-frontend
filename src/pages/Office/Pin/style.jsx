import styled from 'styled-components';

const SPin = styled.button`
  width: ${(props) => (props.slot ? '50px' : '16px')};
  height: ${(props) => (props.slot ? '50px' : '16px')};
  background: ${(props) => (props.slot ? 'inherit' : '#44df44')};
  background-image: ${(props) =>
    props.slot ? `url(${props.slot})` : 'inherit'};
  background-size: 50px 50px;
  background-position: center;
  position: absolute;
  z-index: 1;
  border-radius: 20px;
  cursor: pointer;
`;

export default SPin;
