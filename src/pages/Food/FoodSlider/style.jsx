import styled from 'styled-components';

const SFoodSlider = styled.section`
  overflow: contain;
  position: relative;
  aspect-ratio: 2/3;
  height: 220px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin: 40px 30px 10px 30px;

  .imgContain {
    overflow: hidden;
    position: absolute;
    bottom: 55%;
    left: 9%;
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 50%;
  }
  .typeImg {
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
  .typeName {
    margin-top: 60%;
    font-size: 20px;
    font-weight: 600;
    align-items: center;
  }
  .price {
    margin-top: 10%;
  }
  .swiperComponent {
    width: 370px;
    background-color: yellow;
  }
`;

export default SFoodSlider;
