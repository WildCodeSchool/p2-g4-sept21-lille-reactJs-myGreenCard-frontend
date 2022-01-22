import styled from 'styled-components';

const SRefillModal = styled.section`
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 2;
  .modalContent {
    text-align: center;
    background-color: white;
    position: absolute;
    z-index: 2;
    height: 25vh;
    width: 80vw;
    border-radius: 10px;
    p {
      padding: 15px;
    }
    .close{
     width:auto;
     background-color: transparent;
     box-shadow:none;
     margin-left: 65vw;
     font-size: 24px;
     font-weight: bold;
   }
    button{
        width: 80px;
        background: #ececec;
        margin: 15px;
        padding: 5px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 7px 12px -3px #afafaf;
        box-shadow: 0px 7px 12px -3px #afafaf;
      }
    }
  }
`;

export default SRefillModal;
