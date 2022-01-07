import styled from 'styled-components';

const SFoodModal = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #eeeded;
  position: absolute;
  width: 100vw;
  z-index: 2;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  article {
    border-radius: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: white;
    width: 230px;
    height: 300px;
    margin: 50px 0 20px 0;
  }
  img {
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
  .imgContain {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    overflow: hidden;
    position: absolute;
    top: 5%;
    left: 26%;
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  .foodTitle {
    width: 60%;
    margin-bottom: 10%;
    font-size: 23px;
    font-weight: 600;
    align-items: center;
  }
  span {
    margin-bottom: 10px;
  }
  .foodContent {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
  .buttonWrapper {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }
  .foodContent {
    display: flex;
    flex-direction: column;
  }
`;

export default SFoodModal;
