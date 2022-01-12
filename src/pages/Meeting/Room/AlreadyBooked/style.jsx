import styled from 'styled-components';

const SAlreadyBooked = styled.div`
  margin-top: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .meetingRoom {
    height: 180px;
    width: 180px;
    border: 10px #d30000 solid;
    img {
      object-fit: cover;
      height: 180px;
      width: 180px;
      margin: 35px 0;
    }
  }
  .smallAvatar {
    height: 120px;
    width: 120px;
    img {
      object-fit: cover;
      height: 120px;
      width: 120px;
    }
  }
  h2 {
    margin: 30px;
  }
  .participants {
    margin: 30px;

    .participant {
      margin: 0 2px;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        z-index: 2;
      }
    }
    .badge {
      .mode {
        left: -10px;
        width: 25px;
        height: 25px;
        img {
          width: 15px;
          height: 15px;
          padding: 10px;
          object-fit: cover;
          background-color: #92b878;
        }
        &.dist {
          img {
            background-color: #df9f9f;
          }
        }
      }
    }
  }
`;
export default SAlreadyBooked;
