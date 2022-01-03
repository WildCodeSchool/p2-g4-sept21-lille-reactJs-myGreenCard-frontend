import { useParams } from 'react-router';
import { useState } from 'react';
import propTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
import SValidation from './style';
import ValidationPopup from '../ValidationPopup';

SwiperCore.use([Navigation]);
const data = require('../../meeting.json');

const dataRooms = data.rooms;
export default function Validation({ setAlreadyBooked, setValidation }) {
  const { id } = useParams();
  const [validationPopup, setValidationPopup] = useState(false);

  const showValidationPopup = () => {
    setValidationPopup(!validationPopup);
  };

  const showAlreadyBooked = () => {
    setAlreadyBooked(true);
    setValidation(false);
  };
  return (
    <SValidation>
      <img src={dataRooms[id - 1].picture} alt="Salle de réunion" />
      <h2>Salle de réunion n°{id}</h2>
      <Swiper navigation className="mySwiper">
        {dataRooms[id - 1].disponibility.map((day) => {
          return (
            <SwiperSlide>
              <h3>{day.name}</h3>
              <div className="slots">
                {day.slots.map((slot) => {
                  return (
                    <button
                      type="button"
                      className={slot.occupation === 'yes' ? 'reserved' : null}
                      onClick={
                        slot.occupation === 'no'
                          ? showValidationPopup
                          : showAlreadyBooked
                      }
                    >
                      {slot.description}
                    </button>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {validationPopup ? (
        <ValidationPopup
          validationPopup={validationPopup}
          setValidationPopup={setValidationPopup}
        />
      ) : null}
    </SValidation>
  );
}

Validation.propTypes = {
  setAlreadyBooked: propTypes.func,
  setValidation: propTypes.func,
};

Validation.defaultProps = {
  setAlreadyBooked: () => {},
  setValidation: () => {},
};
