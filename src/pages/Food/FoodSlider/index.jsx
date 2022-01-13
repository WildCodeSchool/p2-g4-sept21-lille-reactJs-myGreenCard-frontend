import PropTypes from 'prop-types';
import { useState } from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainButton from 'components/MainButton';
import FoodModal from '../FoodModal';
import SFoodSlider from './style';

const FoodSlider = ({ typeOfFood, theme }) => {
  const isDarkTheme = theme === 'dark';
  console.log(theme);
  const [renderModal, setRenderModal] = useState(false);
  const [menuItem, setMenuItem] = useState({});

  const toggleModal = () => {
    setRenderModal(!renderModal);
  };

  return (
    <>
      {renderModal && <FoodModal menuElement={menuItem} />}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
      >
        {typeOfFood.map((type) => (
          <SwiperSlide
            className={
              isDarkTheme
                ? 'swiperComponent darkThemeBackground'
                : 'swiperComponent swiperComponentColor'
            }
            key={type.id}
          >
            <SFoodSlider
              className={isDarkTheme ? 'darkThemeMode' : 'lightThemeMode'}
            >
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
              <MainButton
                clickCallback={() => {
                  toggleModal();
                  setMenuItem(type);
                }}
                content="Choisir ce plat"
              />
            </SFoodSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

FoodSlider.propTypes = {
  theme: PropTypes.string,
  typeOfFood: PropTypes.arrayOf(PropTypes.string),
};

FoodSlider.defaultProps = {
  theme: '',
  typeOfFood: [],
};

export default FoodSlider;
