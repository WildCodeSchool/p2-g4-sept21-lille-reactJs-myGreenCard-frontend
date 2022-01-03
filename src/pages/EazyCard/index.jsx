import Header from 'components/Header';
import SEazyCard from './style';
import nfc from '../../assets/Img/iphone.svg';
import logo from '../../assets/Img/easyApp.png';
import card from '../../assets/Img/easyCard.png';

export default function EazyCard() {
  return (
    <>
      <Header logo={logo} />
      <SEazyCard>
        <img src={card} alt="Eazycard" />
        <div className="anime">
          <img className="nfc" src={nfc} alt="NFC" />
        </div>
        <p> Approchez du lecteur</p>
      </SEazyCard>
    </>
  );
}
