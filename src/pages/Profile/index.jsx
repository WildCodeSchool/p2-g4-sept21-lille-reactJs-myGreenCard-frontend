import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserAvatar from 'components/UserAvatar';
import logo from 'assets/Img/easyApp.png';
import logoDark from 'assets/Img/easyAppDark.png';
import applePay from 'assets/Img/Apple_Pay_logo.svg';
import cb from 'assets/Img/logo-cb.svg';
import larrondi from 'assets/Img/LARRONDI.svg';
import home from 'assets/Img/home.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ToggleButton from 'components/ToggleButton';
import SProfilPage from './style';
import Meetings from './Meetings';
import RefillModal from './RefillModal';
import GiftModal from './GiftModal';

export default function ProfilPage({ theme, setTheme }) {
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    return setTheme(isDarkTheme ? 'light' : 'dark');
  };
  const user = useSelector((state) => state.user);
  const [refillModal, setRefillModal] = useState(true);
  const toggleModal = () => {
    setRefillModal(!refillModal);
  };
  const [giftModal, setGiftModal] = useState(true);
  const toggleGiftModal = () => {
    setGiftModal(!giftModal);
  };

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
          <div className="userCard">
            <UserAvatar size="125px" border="none" />
            <h2>
              {user.firstname} {user.lastname}
            </h2>
            <p>{user.job}</p>
          </div>
        </div>
        <article className="solde">
          <h2>Solde : {user.amount} € </h2>
          <div className="refill">
            <button type="button" className="money" onClick={toggleModal}>
              Recharger
            </button>
            <button type="button" className="money" onClick={toggleGiftModal}>
              Donner
            </button>
          </div>
          <div className="paymentLogo">
            <img src={cb} alt="CB" />
            <img src={applePay} alt="apple pay" />
            <img src={larrondi} alt="l&#39;arrondi" />
          </div>
        </article>
        <article className="resume">
          <h2>Mes reservations</h2>
          <p>Recapitulatif des reservations en cours ...</p>
        </article>
        <Meetings />
        <article className="resume">
          <h2>Mes commandes</h2>
          <p>Recapitulatif commande en cours ...</p>
        </article>
        <article className="resume">
          <h2>Mon repas</h2>
          <p>Recapitulatif commande en cours ...</p>
        </article>
        {!refillModal && <RefillModal toggleModal={toggleModal} />}
        {!giftModal && <GiftModal toggleGiftModal={toggleGiftModal} />}
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
