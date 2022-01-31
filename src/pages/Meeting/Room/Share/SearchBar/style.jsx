import styled from 'styled-components';

const SSearchBar = styled.div`
  margin: 15px 0 20px 0;
  position: relative;
  input {
    width: 60vw;
    color: black;
    height: 30px;
    padding: 8px;
    border-radius: 15px;
    border: 1px solid #cecece;
    :focus {
      outline: none;
    }
  }
  ul {
    z-index: 3;
    background-color: white;
    position: absolute;
    margin: 0 0;
    width: 60vw;
    max-height: 110px;
    overflow: scroll;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    li {
      width: 100%;
      height: 30px;
      padding: 2px 0px;
      font-size: 0.9rem;
      :hover {
        background-color: #e2e2e2;
      }
      border-top: 1px solid #cecece;
      button {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        text-align: left;
        img {
          margin: 0 10px 0 0;
          height: 100%;
          width: auto;
        }
      }
    }
  }
  p {
    margin: 80px 0 0px 0;
  }
  .avatars {
    margin: 15px 0;
    justify-content: center;
    div {
      margin: 0 0px;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
    }
  }
`;
export default SSearchBar;
