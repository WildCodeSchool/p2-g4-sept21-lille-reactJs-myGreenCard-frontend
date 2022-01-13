import styled from 'styled-components';

const SFoodSlider = styled.section`
  overflow: contain;
  position: relative;
  aspect-ratio: 2.1/3.5;
  height: 500px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin: 40px 30px 40px 30px;

  .imgContain {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    overflow: hidden;
    position: absolute;
    bottom: 48%;
    left: 9%;
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 50%;
  }
  .typeImg {
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
  .typeName {
    width: 80%;
    margin-top: 60%;
    font-size: 20px;
    font-weight: 600;
    align-items: center;
  }
  .price {
    margin-top: 10%;
  }
`;

export default SFoodSlider;
