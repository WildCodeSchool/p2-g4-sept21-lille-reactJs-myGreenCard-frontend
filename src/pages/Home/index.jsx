import Header from 'components/Header';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import apple from 'assets/Img/apple.png';
import { useEffect } from 'react';
import axios from 'axios';
import google from './pictures/googleWallet.png';
import ToggleButton from '../../components/ToggleButton';
import logo from '../../assets/Img/easyApp.png';
import darkLogo from '../../assets/Img/easyAppDark.png';
import food from './pictures/food.png';
import darkFood from './pictures/darkFood.png';
import office from './pictures/office.png';
import darkOffice from './pictures/darkOffice.png';
import meetingRoom from './pictures/meetingRoom.png';
import darkMeeting from './pictures/darkMeeting.png';
import furnitures from './pictures/furnitures.png';
import darkSupplies from './pictures/darkSupplies.png';
import chat from './pictures/chat.png';
import darkChat from './pictures/darkChat.png';
import Card from './pictures/easyCard.png';
import SHome from './style';

export default function Home({ theme, setTheme }) {
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  const initMeeting = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/reset`).catch((e) => {
      console.log(e);
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', `${theme}`);
  }, [theme]);
  return (
    <>
      <Header logo={isDarkTheme ? darkLogo : logo} />
      <SHome>
        <ToggleButton
          label="Dark/light mode"
          handleClick={toggleTheme}
          className={isDarkTheme ? 'dark' : null}
          size={0.5}
        />
        <article className="badge">
          <h3>Votre badge digital</h3>
          <div>
            <div className="wallet">
              <a
                target="_blank"
                href="https://www.apple.com/apple-card/"
                rel="noreferrer"
              >
                <img src={apple} alt="apple wallet" />
              </a>
              <a
                target="_blank"
                href="https://pay.google.com/intl/fr_fr/about/"
                rel="noreferrer"
              >
                <img src={google} alt="google wallet" />
              </a>
            </div>
            <div>
              <Link to="/eazycard">
                <img src={Card} alt="Eazycard" />
              </Link>
            </div>
          </div>
        </article>
        <Link to="/food">
          <article
            className={isDarkTheme ? 'darkThemeBackground menu' : 'menu'}
          >
            <h3>Le menu du jour</h3>
            <div>
              <div className="description">
                <p>Salade</p>
                <p>Rôti de Boeuf</p>
                <p>Pizza aux légumes</p>
                <p>Muffin</p>
                <p className="dinnersReady">A table !</p>
              </div>
              <img
                src={isDarkTheme ? darkFood : food}
                alt="Icone menu du jour"
              />
            </div>
          </article>
        </Link>
        <Link to="/office">
          <article
            className={isDarkTheme ? 'darkThemeBackground office' : 'office'}
          >
            <h3>Réservation de bureau</h3>
            <div>
              <p>Choisissez votre bureau</p>
              <img src={isDarkTheme ? darkOffice : office} alt="Bureau" />
            </div>
          </article>
        </Link>
        <Link to="/meetingRooms">
          <article
            className={isDarkTheme ? 'darkThemeBackground meeting' : 'meeting'}
          >
            <h3>Réservation de salle de réunion</h3>
            <div className="meetingRoomPicture">
              <p>Réservez votre salle de réunion</p>
              <img
                src={isDarkTheme ? darkMeeting : meetingRoom}
                alt="Salle de réunion"
              />
            </div>
          </article>
        </Link>
        <Link to="/supplies">
          <article
            className={
              isDarkTheme ? 'darkThemeBackground furnitures' : 'furnitures'
            }
          >
            <h3>Commande de fournitures</h3>
            <div>
              <p>Ajoutez les articles dont vous avez besoin</p>
              <img
                src={isDarkTheme ? darkSupplies : furnitures}
                alt="Fournitures"
              />
            </div>
          </article>
        </Link>
        <Link to="/lostCard">
          <article
            className={
              isDarkTheme ? 'darkThemeBackground lostCard' : 'lostCard'
            }
          >
            <h3>Carte perdue</h3>
            <div className="pictureCard">
              <p>Désactiver votre carte en cas de perte</p>
              <img src={Card} alt="Eazypass" />
            </div>
          </article>
        </Link>
        <Link to="/chat">
          <article
            className={isDarkTheme ? 'darkThemeBackground chat' : 'chat'}
          >
            <h3>Chat</h3>
            <div>
              <p>
                Discutez dans notre chat général avec les autres utilisateurs!
              </p>
              <img src={isDarkTheme ? darkChat : chat} alt="" />
            </div>
          </article>
        </Link>
        <button
          onClick={() => {
            initMeeting();
          }}
          className="init"
          type="button"
          aria-label="Bouton réinitialisaton base de données"
        />
      </SHome>
    </>
  );
}
Home.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};

Home.defaultProps = {
  theme: '',
  setTheme: () => {},
};
