import styled from 'styled-components';

const SUserAvatar = styled.div`
  display: flex;
  border: ${(props) => props.border};
  border-radius: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 10px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export default SUserAvatar;
