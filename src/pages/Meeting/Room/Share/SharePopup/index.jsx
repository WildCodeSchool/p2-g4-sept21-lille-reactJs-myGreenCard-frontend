import propTypes from 'prop-types';
import axios from 'axios';
import { useEffect } from 'react';
import SSharePopup from './style';

export default function SharePopup({
  setSharePopup,
  setValidation,
  setShare,
  newParticipants,
  participants,
  reservation,
  setNewParticipants,
}) {
  const makeTheModalDisappear = () => {
    setSharePopup(false);
  };
  const storeParticipants = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/meeting/participants`, [
        newParticipants,
      ])
      .catch((e) => {
        console.log(e);
      });
  };
  const showValidation = () => {
    makeTheModalDisappear();
    setShare(false);
    setValidation(true);
    storeParticipants();
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/meeting?id=${reservation.roomId}&slot=${reservation.slot}`
      )
      .then(({ data }) => {
        if (data[0]) {
          const tempParticipants = Array.from(participants, ({ id }) => [
            id,
            data[0].id,
            'présentiel',
          ]);
          setNewParticipants(tempParticipants);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [participants]);
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
  reservation: propTypes.shape({
    roomId: propTypes.string,
    slot: propTypes.string,
    userFirstname: propTypes.string,
    userLastname: propTypes.string,
    userPicture: propTypes.string,
    roomPicture: propTypes.string,
  }),
  setSharePopup: propTypes.func,
  setValidation: propTypes.func,
  setShare: propTypes.func,
  setNewParticipants: propTypes.func,
  participants: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      firstname: propTypes.string,
      lastname: propTypes.string,
      password: propTypes.string,
      picture: propTypes.string,
      job: propTypes.string,
      isLogged: propTypes.bool,
      cardNumber: propTypes.number,
      amount: propTypes.number,
      isInvited: propTypes.bool,
      eggFree: propTypes.bool,
      glutenFree: propTypes.bool,
      gmoFree: propTypes.bool,
      nutFree: propTypes.bool,
      sugarFree: propTypes.bool,
      cornFree: propTypes.bool,
      dairyFree: propTypes.bool,
      soyFree: propTypes.bool,
      transFatsFree: propTypes.bool,
      vegan: propTypes.bool,
      shellfishFree: propTypes.bool,
      porkFree: propTypes.bool,
      vegetarian: propTypes.bool,
      fridayFish: propTypes.bool,
      onDiet: propTypes.bool,
    })
  ),
  newParticipants: propTypes.arrayOf(propTypes.arrayOf(propTypes.any)),
};
SharePopup.defaultProps = {
  setSharePopup: () => {},
  setValidation: () => {},
  setShare: () => {},
  newParticipants: [],
  participants: null,
  reservation: null,
  setNewParticipants: () => {},
};
