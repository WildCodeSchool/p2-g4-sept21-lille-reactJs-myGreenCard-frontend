import Header from 'components/Header';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from 'assets/Img/easyApp.png';
import nfc from 'assets/Img/nfcIcon.png';
import emptyCard from 'assets/Img/emptyCard.png';
import ToggleButton from 'components/ToggleButton';
import MainButton from 'components/MainButton';
import SCard from './SCard';
import SLostCard from './style';
import DisableModal from './disableModal';

export default function LostCard() {
  const user = useSelector((state) => state.user);
  const [renderModal, setRenderModal] = useState(true);
  const toggleTheme = () => {
    setRenderModal(!renderModal);
  };

  return (
    <>
      <Header logo={logo} />
      <SLostCard>
        <main>
          <h2>Carte perdue</h2>
          <SCard img={emptyCard}>
            <div className="hLogo">
              <img src={nfc} alt="nfc" />
              <img src={logo} alt="logo" />
            </div>
            <div className="cMain">
              <img src={user.picture} alt="profilpicture" />
              <div className="userInfo">
                <h3>
                  {user.firstname} {user.lastname}
                </h3>
                <p>{user.job} </p>
              </div>
            </div>
            <div className="cNumb">n°{user.cardNumber}</div>
          </SCard>
          <div className="job">
            <h2>
              {user.firstname} {user.lastname}
            </h2>
            {user.job}
          </div>
          <div className="disable">
            <p> Désactiver la carte </p>
            <ToggleButton
              handleClick={toggleTheme}
              className={renderModal ? null : 'dark'}
              size={0.7}
              trueColor="green"
              falseColor="red"
              flasePoint="black"
            />
          </div>
        </main>
        {!renderModal && (
          <div className="modal">
            <DisableModal />
            <MainButton content="Confirmer" />
          </div>
        )}
      </SLostCard>
    </>
  );
}
