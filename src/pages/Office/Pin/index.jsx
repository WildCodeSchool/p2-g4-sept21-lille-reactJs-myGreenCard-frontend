// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import SPin from './style';

export default function Pin({ pin, dataSlot, resOffice, myResOffice }) {
  // const [myResOffice, setMyResOffice] = useState(false);
  // const [resOffice, setResOffice] = useState(false);
  // const user = useSelector((state) => state.user);
  const resTheme = () => {
    // return setMyResOffice(!myResOffice);
  };
  const slot = dataSlot.filter((data) => data.officeId === pin.number);
  // useEffect(() => {
  //   if (slot[0] && user.id === slot[0].userId) {
  //     setMyResOffice(true);
  //   } else if (slot[0] && user.id !== slot[0].userId) {
  //     setResOffice(true);
  //   }
  //   console.log(slot[0]);
  // }, []);

  return (
    <>
      {console.log(`${myResOffice} ${pin.number}`)}
      {/* {console.log(myResOffice)} */}
      {/* {console.log(slot)} */}
      <SPin
        disabled={!!resOffice}
        slot={slot[0] ? slot[0].picture : false}
        aria-label="pinButton"
        onClick={resTheme}
        type="button"
        className={
          myResOffice ? `buttonUser ${pin.class} button` : `${pin.class} button`
        }
      />
    </>
  );
}

Pin.propTypes = {
  pin: propTypes.shape({ class: propTypes.string, number: propTypes.number }),
  dataSlot: propTypes.arrayOf(
    propTypes.shape({
      number: propTypes.number,
      Office_id: propTypes.number,
      User_id: propTypes.number,
      beginning: propTypes.instanceOf(Date),
    })
  ),
  resOffice: propTypes.arrayOf(propTypes.bool),
  myResOffice: propTypes.arrayOf(propTypes.bool),
};

Pin.defaultProps = {
  pin: {},
  dataSlot: [],
  resOffice: [],
  myResOffice: [],
};
