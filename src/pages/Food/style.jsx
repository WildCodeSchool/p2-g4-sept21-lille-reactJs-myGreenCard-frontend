import styled from 'styled-components';

const SFood = styled.main`
  display: flex;
  flex-direction: column;

  .choiceMenu {
    margin-top: 20px;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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
    margin: 20px 0 20px 0;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiperComponent {
    width: 370px;
    background-color: #eeeded;
  }
`;

export default SFood;
