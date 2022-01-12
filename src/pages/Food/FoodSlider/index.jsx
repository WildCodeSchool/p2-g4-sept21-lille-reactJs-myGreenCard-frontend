import PropTypes from 'prop-types';
import { useState } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FoodModal from '../FoodModal';

import SFoodSlider from './style';

const FoodSlider = ({ typeOfFood }) => {
  const [renderModal, setRenderModal] = useState(false);
  const [menuItem, setMenuItem] = useState({});

  const toggleModal = () => {
    setRenderModal(!renderModal);
  };

  return (
    <>
      {renderModal && <FoodModal menuElement={menuItem} />}
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
          <SwiperSlide className="swiperComponent" key={type.id}>
            <SFoodSlider>
              <button
                type="button"
                onClick={() => {
                  toggleModal();
                  setMenuItem(type);
                }}
                className="imgContain"
              >
                <img
                  className="typeImg"
                  src={type.picture}
                  alt={`${type.name}`}
                />
              </button>
              <p className="typeName">{type.name}</p>
              <p className="price">{type.price} €</p>
            </SFoodSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

FoodSlider.propTypes = {
  typeOfFood: PropTypes.arrayOf(PropTypes.string),
};

FoodSlider.defaultProps = {
  typeOfFood: [],
};

export default FoodSlider;
