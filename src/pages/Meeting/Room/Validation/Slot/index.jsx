import moment from 'moment';
import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import SSlot from './style';

export default function Slot({
  setAlreadyBooked,
  setReservation,
  setValidation,
  setValidationPopup,
  slot,
  roomPicture,
}) {
  const [dataSlot, setDataSlot] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const { id } = useParams();
  const slotT = moment(slot.slotTime).format('YYYY-MM-DD HH:mm:ss');
  const showValidationPopup = () => {
    setReservation({
      roomId: id,
      slot: slotT,
      userFirstname: null,
      userLastname: null,
      userPicture: null,
      roomPicture,
    });
    setValidationPopup(true);
  };

  const showAlreadyBooked = () => {
    setAlreadyBooked(true);
    setValidation(false);
    setReservation(dataSlot);
  };
  const handleClick = (occupation) => {
    return occupation === true ? showAlreadyBooked() : showValidationPopup();
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/meeting?id=${id}&slot=${slotT}`)
      .then(({ data }) => {
        if (data[0]) {
          setDataSlot(data[0]);
          setIsBooked(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <SSlot
      type="button"
      className={isBooked === true ? 'reserved' : null}
      onClick={() => {
        handleClick(isBooked);
      }}
    >
      {slot.slotDisplay}
    </SSlot>
  );
}

Slot.propTypes = {
  setAlreadyBooked: propTypes.func,
  setValidation: propTypes.func,
  setValidationPopup: propTypes.func,
  setReservation: propTypes.func,
  slot: propTypes.shape({
    slotDisplay: propTypes.string,
    slotTime: propTypes.number,
  }),
  roomPicture: propTypes.string,
};

Slot.defaultProps = {
  setAlreadyBooked: () => {},
  setReservation: () => {},
  setValidation: () => {},
  setValidationPopup: () => {},
  slot: null,
  roomPicture: '',
};
