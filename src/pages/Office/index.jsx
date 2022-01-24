import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import officeRoom from 'assets/Img/OfficePictures/officeRoom.png';
import logo from 'assets/reservationBureau.png';
import Header from 'components/Header';
import React, { useState } from 'react';
import user from '../../assets/Img/users/e3.png';
import SOffice from './style';

export default function Office() {
  SwiperCore.use([Navigation]);
  const plan = {
    backgroundImage: `url(${officeRoom})`,
  };

  const [resaOffice, setResaOffice] = useState(false);
  const resTheme = () => {
    return setResaOffice(!resaOffice);
  };

  return (
    <>
      <Header logo={logo} />
      <SOffice avatar={user}>
        {
          <button
            aria-label="pinButton"
            onClick={resTheme}
            type="button"
            className={resaOffice ? 'buttonUser button1' : 'button1'}
          /> /* {resaOffice ? (
          <>
            <button onClick={resTheme} type="button" className="button1">
              {' '}
            </button>
          </>
        ) : (
          <>
            <div className="userResa">
              <img src={user} id="userPic" alt="userPic" />
            </div>
          </>
        )} */
        }

        <div className="button2" />
        <div className="button3" />
        <div className="button4" />
        <div className="button5" />
        <div className="button6" />
        <div style={plan} className="plan" alt="office room" />
        <div className="rowProfiles">
          <div className="circle1" />
          <AvatarGroup max={5}>
            <Avatar alt="User avatar 1" src="https://www.placecage.com/80/80" />
            <Avatar alt="User avatar 2" src="https://www.placecage.com/81/81" />
            <Avatar
              alt="User avatar 3"
              src="https://www.stevensegallery.com/80/80"
            />
            <Avatar
              alt="User avatar 4"
              src="https://www.fillmurray.com/78/78"
            />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <p>sont présents aujourd&apos;hui</p>
        </div>
        <h2>Bureau n°1</h2>
        <Swiper navigation slidesPerView={2}>
          <SwiperSlide className="swiperComponent">
            <h3>Lundi</h3>
            <div className="slots">
              <span>Matin: 8h-12h</span>
              <span>Après-midi: 14h-18h</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperComponent">
            <h3>Mardi</h3>
            <div className="slots">
              <span>Matin: 8h-12h</span>
              <span>Après-midi: 14h-18h</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperComponent">
            <h3>Mercredi</h3>
            <div className="slots">
              <span>Matin: 8h-12h</span>
              <span>Après-midi: 14h-18h</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperComponent">
            <h3>Jeudi</h3>
            <div className="slots">
              <span>Matin: 8h-12h</span>
              <span>Après-midi: 14h-18h</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperComponent">
            <h3>Vendredi</h3>
            <div className="slots">
              <span>Matin: 8h-12h</span>
              <span>Après-midi: 14h-18h</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </SOffice>
    </>
  );
}
