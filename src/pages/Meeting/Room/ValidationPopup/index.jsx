import propTypes from 'prop-types';
import SValidationPopup from './style';

export default function ValidationPopup({
  validationPopup,
  setValidationPopup,
  reservation,
}) {
  const makeTheModalAppear = () => {
    setValidationPopup(!validationPopup);
  };
  console.log(reservation);
  return (
    <SValidationPopup>
      <div className="modalContent">
        <h2>Confirmation</h2>
        <p>
          Confirmez-vous la réservation de la salle de réunion n°
          {reservation.roomId} {reservation.day} de {reservation.slot} ?
        </p>
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
  reservation: propTypes.shape({
    roomId: propTypes.string,
    day: propTypes.string,
    slot: propTypes.string,
  }),
};

ValidationPopup.defaultProps = {
  validationPopup: false,
  setValidationPopup: () => {},
  reservation: null,
};
