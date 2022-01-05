import Header from 'components/Header';
import nfcLight from 'assets/Img/phoneNfcLight.gif';
import nfcDark from 'assets/Img/phoneNfcDark.gif';
import logo from 'assets/Img/easyApp.png';
import logoDark from 'assets/Img/easyAppDark.png';
import card from 'assets/Img/easyCard.png';
import PropTypes from 'prop-types';
import SEazyCard from './style';

export default function EazyCard({ theme }) {
  const isDarkTheme = theme === 'dark';
  return (
    <>
      <Header logo={isDarkTheme ? logoDark : logo} />
      <SEazyCard>
        <img src={card} alt="Eazycard" />
        <div className="nfc">
          <img
            className="nfc"
            src={isDarkTheme ? nfcDark : nfcLight}
            alt="NFC"
          />
        </div>
        <p> Approchez du lecteur</p>
      </SEazyCard>
    </>
  );
}

EazyCard.propTypes = {
  theme: PropTypes.string,
};

EazyCard.defaultProps = {
  theme: '',
};
