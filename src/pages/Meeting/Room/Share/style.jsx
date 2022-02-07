import styled from 'styled-components';

const SShare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  text-align: center;
  header {
    width: 100vw;
    .profile {
      pointer-events: none;
    }
    .logo {
      margin-left: calc((100vw - 20vw - 100px) / 2);
      margin-right: calc((100vw - 20vw - 100px - 100px) / 2);
    }
    a {
      display: none;
    }
    margin-bottom: 7vh;
  }
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
    margin: 20px 0px;
  }
`;
export default SShare;
