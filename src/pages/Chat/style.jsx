import styled from 'styled-components';

const SChat = styled.main`
  overflow: scroll;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  li {
    position: relative;
    border-radius: 20px;
    width: 90vw;
    height: auto;
    padding: 10px;
    display: flex;
    img {
      width: 50px;
    }
    p {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  p.content {
    display: block;
    max-width: calc(100% - 50px - 25px);
    word-wrap: break-word;
    padding: 5px;
    line-height: 1.6rem;
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
    padding: 7px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 30px;
    height: 40px;
    width: 85vw;
    color: black;
    margin: 20px 0 20px 0;
  }
  .inputButton {
    color: grey;
    width: 30px;
    height: 40px;
    font-size: 30px;
    background-color: ${(props) => props.theme.background};
    border: none;
  }
  .notice {
    margin: 30px 10px 0 10px;
    background-color: #eeedede8;
    display: flex;
    justify-content: space-between;
    .userName {
      display: flex;
      justify-content: flex-start;
    }
  }
  .ownMsg {
    margin: 30px 10px 0 10px;
    background-color: #9f9ff18f;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    .userName {
      display: flex;
      justify-content: flex-end;
    }
  }
  .userImg {
    img {
      border-radius: 50%;
    }
    padding: 5px;
  }
  .userName {
    position: absolute;
    top: -20px;
    margin-bottom: 3px;
    width: 95%;
    display: flex;
    justify-content: flex-end;
    font-size: 15px;
    font-weight: 400;
    color: ${(props) => props.theme.text};
  }
  ul {
    overflow: scroll;
    overflow-y: scroll;
    height: 78vh;
  }
`;
export default SChat;
