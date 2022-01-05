import propTypes from 'prop-types';
import SValidationPopup from './style';

export default function ValidationPopup({
  setValidationPopup,
  reservation,
  setValidation,
  setShare,
}) {
  const makeTheModalDisappear = () => {
    setValidationPopup(false);
  };
  // It will also be necessary to store information of the reservation

  const showShare = () => {
    makeTheModalDisappear();
    setValidation(false);
    setShare(true);
  };
  return (
    <SValidationPopup>
      <div className="modalContent">
        <h2>Confirmation</h2>
        <p>
          Confirmez-vous la réservation de la salle de réunion n°
          {reservation.roomId} {reservation.day} de {reservation.slot} ?
        </p>
        <div>
          <button type="button" onClick={showShare}>
            Oui
          </button>
          <button type="button" onClick={makeTheModalDisappear}>
            Non
          </button>
        </div>
      </div>
    </SValidationPopup>
  );
}

ValidationPopup.propTypes = {
  setValidationPopup: propTypes.func,
  setValidation: propTypes.func,
  reservation: propTypes.shape({
    roomId: propTypes.string,
    day: propTypes.string,
    slot: propTypes.string,
  }),
  setShare: propTypes.func,
};

ValidationPopup.defaultProps = {
  setValidationPopup: () => {},
  reservation: null,
  setShare: () => {},
  setValidation: () => {},
};
