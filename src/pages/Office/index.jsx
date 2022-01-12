import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import officeRoom from 'assets/Img/OfficePictures/officeRoom.png';
import logo from 'assets/reservationBureau.png';
import Header from '../../components/Header';
import SOffice from './style';

SwiperCore.use([Navigation]);

export default function Office() {
  return (
    <>
      <Header logo={logo} />
      <SOffice>
        <img className="plan" src={officeRoom} alt="office room" />
        <div className="rowProfiles">
          <div className="circle" />
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
