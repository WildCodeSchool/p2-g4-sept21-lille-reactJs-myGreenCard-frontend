import styled from 'styled-components';

const SFood = styled.main`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;

  .userAvatar {
    top: 0;
    position: absolute;
    width: 97vw;
    height: 100px;
    display: flex;
    justify-content: flex-end;
  }
  .choiceMenu {
    margin-top: 60px;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .menuOfDay {
    text-align: center;
    margin: 10vh 0 20px 0;
    font-weight: 400;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiperComponent {
    width: 370px;
  }
  .swiperComponentColor {
    background-color: #eeeded;
  }
  .swiper-slide .swiper-slide-active {
    width: 100px;
  }
`;

export default SFood;
