import styled from 'styled-components';

const SValidationPopup = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);
  div.modalContent {
    background-color: ${(props) => props.theme.secondBackground};
    text-align: center;
    position: absolute;
    z-index: 2;
    width: 80vw;
    height: 100%;
    border-radius: 10px;
    p {
      padding: 15px;
    }
    div {
      button,
      a {
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

export default SValidationPopup;
