import styled from 'styled-components';

const SDisableModal = styled.div`
  height: 15vh;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  input {
    border: none;
    border-bottom: 1px solid black;
    width: 75vw;
    margin-bottom: 1vh;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
`;
export default SDisableModal;
