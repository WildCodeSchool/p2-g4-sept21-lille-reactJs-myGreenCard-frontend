import PropTypes from 'prop-types';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SFoodSlider from './style';

const FoodSlider = ({ typeOfFood }) => {
  return (
    <Swiper
      className="swiperComponent"
      modules={[Navigation, Pagination]}
      slidesPerView={2}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
    >
      {typeOfFood.map((type) => (
        <>
          <SwiperSlide className="swiperComponent">
            <SFoodSlider>
              <div className="imgContain">
                <img className="typeImg" src={type.img} alt="" />
              </div>
              <p className="typeName">{type.name}</p>
              <p className="price">{type.price}</p>
            </SFoodSlider>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

FoodSlider.propTypes = {
  typeOfFood: PropTypes.arrayOf,
};

FoodSlider.defaultProps = {
  typeOfFood: [],
};

export default FoodSlider;
