import styled from 'styled-components';

const SLostCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  main {
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 70vh;
    h2 {
      font-size: 28px;
      font-weight: bolder;
    }
    .job {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 90vw;
      height: 7vh;
    }
    .disable {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 90vw;
      font-size: 22px;
      font-weight: bold;
    }
  }
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export default SLostCard;
