import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleButton from 'components/ToggleButton';
import UserAvatar from 'components/UserAvatar';
import logo from 'assets/Img/easyApp.png';
import logoDark from 'assets/Img/easyAppDark.png';
import apple from 'assets/Img/apple.png';
import samsung from 'assets/Img/samsung.png';
import applePay from 'assets/Img/Apple_Pay_logo.svg';
import cb from 'assets/Img/logo-cb.svg';
import larrondi from 'assets/Img/LARRONDI.svg';
import card from 'assets/Img/easyCard.png';
import home from 'assets/Img/home.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SProfilPage from './style';

export default function ProfilPage({ theme, setTheme }) {
  const [userData, setUserData] = useState([]);
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    return setTheme(isDarkTheme ? 'light' : 'dark');
  };
  useEffect(() => {
    axios.get('http://localhost:5000/user/3').then(({ data }) => {
      setUserData(data);
    });
  }, []);
  return (
    <>
      <SProfilPage>
        <div className="profilCard">
          <div className="head">
            <Link to="/home">
              <img src={home} alt="homeIcon" />
            </Link>
            <ToggleButton
              label="Dark/light mode"
              handleClick={toggleTheme}
              className={isDarkTheme ? 'dark' : null}
              size={0.75}
            />
          </div>
          <img src={isDarkTheme ? logoDark : logo} alt="homeIcon" />
          <div className="UserCard">
            <UserAvatar size="125px" border="none" />
            <h2>
              {userData.firstname} {userData.lastname}
            </h2>
            <p>{userData.job}</p>
          </div>
        </div>
        <article className="solde">
          <h3>Solde : {userData.Amount} € </h3>
          <div className="recharge">
            <button type="button" className="money">
              Recharger
            </button>
            <button type="button" className="money">
              Donner
            </button>
          </div>
          <div className="paimentLogo">
            <img src={cb} alt="CB" />
            <img src={applePay} alt="apple pay" />
            <img src={larrondi} alt="l&#39;arrondi" />
          </div>
        </article>
        <article className="badge">
          <h2>Votre badge digital </h2>
          <div className="logo">
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
                href="https://www.samsung.com/be_fr/apps/samsung-pass/"
                rel="noreferrer"
              >
                <img src={samsung} alt="samsung wallet" />
              </a>
            </div>
            <div className="card">
              <Link to="/eazycard">
                <img src={card} alt="Eazycard" />
              </Link>
            </div>
          </div>
        </article>
        <article className="resume">
          <h2>Mes commandes</h2>
          <p>Recapitulatif commande en cours ...</p>
        </article>
        <article className="resume">
          <h2>Mon repas</h2>
          <p>Recapitulatif commande en cours ...</p>
        </article>
      </SProfilPage>
    </>
  );
}

ProfilPage.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};

ProfilPage.defaultProps = {
  theme: '',
  setTheme: () => {},
};
