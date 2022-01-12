import propTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';
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
          {reservation.roomId}
          {moment(reservation.slot).format('  dddd ')} à
          {moment(reservation.slot).format('  HH ')}h ?
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
    room: propTypes.number,
    roomId: propTypes.string,
    slot: propTypes.string,
    userFirstname: propTypes.string,
    userLastname: propTypes.string,
    userPicture: propTypes.string,
    roomPicture: propTypes.string,
  }),
  setShare: propTypes.func,
};

ValidationPopup.defaultProps = {
  setValidationPopup: () => {},
  reservation: null,
  setShare: () => {},
  setValidation: () => {},
};
