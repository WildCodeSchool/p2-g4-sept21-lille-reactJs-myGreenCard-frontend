import { useParams } from 'react-router';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
import Header from '../../../components/Header';
import SRoom from './style';
import logo from '../../../assets/reservationReunion.png';
import ValidationModal from '../ValidationModal';

SwiperCore.use([Navigation]);
const data = require('../meeting.json');

const dataRooms = data.rooms;

export default function Room() {
  const { id } = useParams();
  const [renderModal, setRenderModal] = useState(false);

  const makeTheModalAppear = () => {
    setRenderModal(!renderModal);
  };

  return (
    <>
      <Header logo={logo} />
      <SRoom>
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
                        className={
                          slot.occupation === 'yes' ? 'reserved' : null
                        }
                        onClick={makeTheModalAppear}
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
        {renderModal ? (
          <ValidationModal
            renderModal={renderModal}
            setRenderModal={setRenderModal}
          />
        ) : null}
      </SRoom>
    </>
  );
}
