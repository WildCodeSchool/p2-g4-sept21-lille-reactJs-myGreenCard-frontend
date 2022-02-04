import Header from 'components/Header';
import nfcLight from 'assets/Img/phoneNfcLight.gif';
import nfcDark from 'assets/Img/phoneNfcDark.gif';
import logo from 'assets/Img/easyApp.png';
import darkLogo from 'assets/Img/easyAppDark.png';
import card from 'assets/Img/easyCard.png';
import SEazyCard from './style';

export default function EazyCard() {
  const themeStorage = localStorage.getItem('theme');

  return (
    <>
      <Header logo={themeStorage === 'light' ? logo : darkLogo} />
      <SEazyCard>
        <img src={card} alt="Eazycard" />
        <div className="nfc">
          <img
            className="nfc"
            src={themeStorage === 'light' ? nfcLight : nfcDark}
            alt="NFC"
          />
        </div>
        <p> Approchez du lecteur</p>
      </SEazyCard>
    </>
  );
}
