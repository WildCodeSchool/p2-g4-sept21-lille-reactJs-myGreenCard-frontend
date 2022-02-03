import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SPin from './style';

export default function Pin({
  pin,
  dataSlot,
  resOffice,
  myResOffice,
  setMyResOffice,
}) {
  const [slot, setSlot] = useState({});
  const [click, setClick] = useState(false);
  const user = useSelector((state) => state.user);
  const reservation = {
    beginning: pin.slot,
    userId: user.id,
    officeId: pin.number,
  };
  const resTheme = () => {
    setClick(!click);
    let newMyResOffice = [...myResOffice];
    let resSlot = false;
    newMyResOffice.forEach((res) => {
      if (res === true) {
        resSlot = true;
      }
    });

    if (reservation.beginning !== null) {
      if (resSlot === true) {
        axios
          .delete(
            `${process.env.REACT_APP_API_URL}/office/officeReservation/`,
            {
              data: { userId: user.id, beginning: pin.slot },
            }
          )
          .catch((e) => {
            console.log(e);
          });
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/office/officeReservation/`,
            reservation
          )
          .catch((e) => {
            console.log(e);
          });
      } else {
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/office/officeReservation/`,
            reservation
          )
          .catch((e) => {
            console.log(e);
          });
      }
    }

    newMyResOffice = newMyResOffice.map(() => {
      return false;
    });
    const pinRes = !newMyResOffice[pin.number - 1];
    newMyResOffice[pin.number - 1] = pinRes;
    setMyResOffice(newMyResOffice);
    const newSlot = [{ picture: user.picture }];
    setSlot(newSlot);
  };

  useEffect(() => {
    if (!myResOffice[pin.number - 1] && !resOffice[pin.number - 1]) {
      setSlot([]);
    } else {
      const newSlot = dataSlot.filter((data) => data.officeId === pin.number);
      setSlot(newSlot);
    }
  }, [resOffice]);

  return (
    <>
      <SPin
        disabled={resOffice[pin.number - 1]}
        slot={
          slot[0] && (myResOffice[pin.number - 1] || resOffice[pin.number - 1])
            ? slot[0].picture
            : false
        }
        aria-label="pinButton"
        onClick={resTheme}
        type="button"
        className={
          myResOffice[pin.number - 1]
            ? `${pin.class} button`
            : `${pin.class} button`
        }
      />
    </>
  );
}

Pin.propTypes = {
  pin: propTypes.shape({
    class: propTypes.string,
    number: propTypes.number,
    slot: propTypes.string,
  }),
  dataSlot: propTypes.arrayOf(
    propTypes.shape({
      number: propTypes.string,
      officeId: propTypes.number,
      userId: propTypes.number,
      beginning: propTypes.string,
    })
  ),
  resOffice: propTypes.arrayOf(propTypes.bool),
  myResOffice: propTypes.arrayOf(propTypes.bool),
  setMyResOffice: propTypes.func,
};

Pin.defaultProps = {
  pin: {},
  dataSlot: [],
  resOffice: [],
  myResOffice: [],
  setMyResOffice: () => {},
};
