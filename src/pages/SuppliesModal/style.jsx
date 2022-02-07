import styled from 'styled-components';

const SSuppliesModal = styled.main`
  min-height: 87vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding-top: 20px;
  }
  .basketIcon {
    height: 8vh;
    margin-top: 3vh;
  }

  .order {
    display: flex;
    height: 15vh;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2vh;
    margin-top: 5vh;
  }
  @media screen and (max-width: 375px) and (max-height: 667px) {
    .order {
      height: 20vh;
    }
  }
`;

export default SSuppliesModal;
