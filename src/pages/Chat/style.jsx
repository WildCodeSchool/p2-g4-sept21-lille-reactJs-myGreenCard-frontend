import styled from 'styled-components';

const SChat = styled.main`
  overflow: scroll;
  height: 95vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  li {
    border-radius: 20px;
    width: 90vw;
    padding: 10px;
    margin: px 0 0 20px;
    display: flex;
    transition: background-color 0.5s, transform 0.5s;
    img {
      width: 50px;
    }
    p {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .content {
    padding: 5px;
  }
  .timeContain {
    width: 100vw;
    height: 20px;
    display: flex;
    justify-content: center;
  }
  .dateTime {
    display: flex;
    justify-content: center;
    font-weight: 200;
    font-size: 15px;
    margin-bottom: 20px;
  }
  .inputText {
    padding: 10px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 30px;
    height: 40px;
    width: 85vw;
  }
  .inputButton {
    width: 30px;
    height: 40px;
    font-size: 30px;
    background-color: white;
    border: none;
  }
  .notice {
    margin-right: 10px;
    background-color: #eeedede8;
    display: flex;
    justify-content: space-between;
  }
  .ownMsg {
    background-color: #9f9ff18f;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .userImg {
    padding: 5px;
  }
  .userName {
    margin-bottom: 3px;
    width: 95%;
    display: flex;
    justify-content: flex-end;
    font-size: 15px;
    font-weight: 400;
    color: #252525;
  }
`;
export default SChat;
