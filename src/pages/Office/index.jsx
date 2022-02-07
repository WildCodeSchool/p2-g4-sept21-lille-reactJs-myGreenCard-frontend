import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import officeRoom from 'assets/Img/OfficePictures/officeRoom.png';
import logo from 'assets/reservationBureau.png';
import logoDark from 'assets/reservationBureauNight.png';
import Header from 'components/Header';
import { useState } from 'react';
import Pin from './Pin';
import Slot from './Slot';
import SOffice from './style';

export default function Office() {
  const [dataSlot, setDataSlot] = useState([]);
  const [myResOffice, setMyResOffice] = useState([]);
  const [resOffice, setResOffice] = useState([]);
  const [pins, setPins] = useState([
    { class: 'button1', number: 1, slot: null },
    { class: 'button2', number: 2, slot: null },
    { class: 'button3', number: 3, slot: null },
    { class: 'button4', number: 4, slot: null },
    { class: 'button5', number: 5, slot: null },
    { class: 'button6', number: 6, slot: null },
  ]);
  const user = useSelector((state) => state.user);
  const themeStorage = localStorage.getItem('theme');
  SwiperCore.use([Navigation]);
  const plan = {
    backgroundImage: `url(${officeRoom})`,
  };

  const today = new Date();
  const days = [];

  const slotsDisplay = [
    { slotHour: 8, slotDisplay: '8h-12h' },
    { slotHour: 14, slotDisplay: '14h-18h' },
  ];

  for (let i = 0; i < 7; i += 1) {
    const dayDate = new Date();
    dayDate.setDate(today.getDate() + i + 1);
    const dayDisplay = dayDate.toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const slots = [];
    for (let j = 0; j < slotsDisplay.length; j += 1) {
      const { slotDisplay } = slotsDisplay[j];
      const slotTime = dayDate.setHours(slotsDisplay[j].slotHour, 0, 0);
      slots.push({ slotDisplay, slotTime });
    }
    days.push({ display: dayDisplay, slots });
  }
  return (
    <>
      <Header logo={themeStorage === 'light' ? logo : logoDark} />
      <SOffice avatar={user.picture}>
        {pins.map((pin) => (
          <Pin
            key={pin.number}
            pin={pin}
            dataSlot={dataSlot}
            myResOffice={myResOffice}
            resOffice={resOffice}
            setMyResOffice={setMyResOffice}
            pins={pins}
            setDataSlot={setDataSlot}
            setResOffice={setResOffice}
          />
        ))}

        <div style={plan} className="plan" alt="office room" />
        <div className="rowProfiles">
          <AvatarGroup max={5}>
            {dataSlot.map((data) => (
              <Avatar alt="avatar" src={data.picture} key={data.picture} />
            ))}
          </AvatarGroup>
          {dataSlot[0] && (
            <> {dataSlot[1] ? <p>sont présents</p> : <p>est présent</p>}</>
          )}
        </div>
        <h2>Bureau n°1</h2>
        <Swiper navigation slidesPerView={2} className="mySwiper">
          {days.map((day) => {
            return (
              <SwiperSlide key={day.display}>
                <h3>{day.display}</h3>
                <div className="slots">
                  {day.slots.map((slot) => {
                    return (
                      <Slot
                        key={slot.slotTime}
                        slot={slot}
                        pins={pins}
                        setDataSlot={setDataSlot}
                        setResOffice={setResOffice}
                        setMyResOffice={setMyResOffice}
                        setPins={setPins}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SOffice>
    </>
  );
}
