import styled from 'styled-components';

const SLoggingPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  img {
    width: 40vw;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  input {
    border: none;
    border-bottom: 1px solid black;
    width: 80vw;
  }
`;

export default SLoggingPage;
