import propTypes from 'prop-types';
import SSharePopup from './style';

export default function SharePopup({ setSharePopup, setValidation, setShare }) {
  const makeTheModalDisappear = () => {
    setSharePopup(false);
  };
  // It will also be necessary to store information of the share

  const showValidation = () => {
    makeTheModalDisappear();
    setShare(false);
    setValidation(true);
  };
  return (
    <SSharePopup>
      <div className="modalContent">
        <h2>Confirmation</h2>
        <p>Confirmez-vous le partage de cette réunion ?</p>
        <div>
          <button type="button" onClick={showValidation}>
            Oui
          </button>
          <button type="button" onClick={makeTheModalDisappear}>
            Non
          </button>
        </div>
      </div>
    </SSharePopup>
  );
}
SharePopup.propTypes = {
  setSharePopup: propTypes.func,
  setValidation: propTypes.func,
  setShare: propTypes.func,
};
SharePopup.defaultProps = {
  setSharePopup: () => {},
  setValidation: () => {},
  setShare: () => {},
};
