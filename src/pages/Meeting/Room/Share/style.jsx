import styled from 'styled-components';

const SShare = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;
  text-align: center;
  .meetingRoom {
    margin: 25px 0px;
    height: 180px;
    width: 180px;
    img {
      object-fit: cover;
      height: 180px;
      width: 180px;
    }
  }
  button {
    margin-top: 20px;
  }
`;
export default SShare;
