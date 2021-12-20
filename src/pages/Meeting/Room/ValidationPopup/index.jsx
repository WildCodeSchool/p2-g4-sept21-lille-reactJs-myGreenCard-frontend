import propTypes from 'prop-types';
import SValidationPopup from './style';

export default function ValidationPopup({
  validationPopup,
  setValidationPopup,
}) {
  const makeTheModalAppear = () => {
    setValidationPopup(!validationPopup);
  };
  return (
    <SValidationPopup>
      <div className="modalContent">
        <h2>Confirmation</h2>
        <p>Confirmez-vous la réservation de la salle de réunion n° ?</p>
        <div>
          <button type="button"> Oui</button>
          <button type="button" onClick={makeTheModalAppear}>
            Non
          </button>
        </div>
      </div>
    </SValidationPopup>
  );
}

ValidationPopup.propTypes = {
  validationPopup: propTypes.bool,
  setValidationPopup: propTypes.func,
};

ValidationPopup.defaultProps = {
  validationPopup: false,
  setValidationPopup: () => {},
};
