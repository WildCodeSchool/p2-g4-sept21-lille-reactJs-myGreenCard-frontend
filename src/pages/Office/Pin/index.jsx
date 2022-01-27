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
  // setMyResOffice,
}) {
  const [slot, setSlot] = useState({});
  const user = useSelector((state) => state.user);
  const reservation = {
    beginning: pin.slot,
    userId: user.id,
    officeId: pin.number,
  };
  const resTheme = () => {
    const newMyResOffice = [...myResOffice];
    let resSlot = false;

    newMyResOffice.forEach((res) => {
      if (res === true) {
        resSlot = true;
      }
    });
    console.log(resSlot);
    if (resSlot === true) {
      console.log(user.id);
      axios
        .delete(`${process.env.REACT_APP_API_URL}/office/officeReservation/`, {
          data: { userId: user.id },
        })
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
    const pinRes = !newMyResOffice[pin.number - 1];

    newMyResOffice[pin.number - 1] = pinRes;
    console.log(newMyResOffice[pin.number - 1]);
    // setMyResOffice(!newMyResOffice);
  };

  useEffect(() => {
    if (!myResOffice[pin.number - 1] && !resOffice[pin.number - 1]) {
      setSlot([]);
    } else {
      const newSlot = dataSlot.filter((data) => data.officeId === pin.number);
      setSlot(newSlot);
    }
  }, [myResOffice, resOffice, dataSlot]);

  return (
    <>
      {/* {console.log(`resOffice ${resOffice}`)} */}
      {console.log(`myResOffice ${myResOffice}`)}
      {/* {console.log(pin.number)}
      {console.log(slot)} */}

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
    slot: propTypes.instanceOf(Date),
  }),
  dataSlot: propTypes.arrayOf(
    propTypes.shape({
      number: propTypes.number,
      officeId: propTypes.number,
      userId: propTypes.number,
      beginning: propTypes.instanceOf(Date),
    })
  ),
  resOffice: propTypes.arrayOf(propTypes.bool),
  myResOffice: propTypes.arrayOf(propTypes.bool),
  // setMyResOffice: propTypes.func,
};

Pin.defaultProps = {
  pin: {},
  dataSlot: [],
  resOffice: [],
  myResOffice: [],
  // setMyResOffice: () => {},
};
