import styled from 'styled-components';

const SUserProfile = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 10px;
  .userImg {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export default SUserProfile;
