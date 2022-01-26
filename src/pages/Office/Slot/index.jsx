// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import SSlot from './style';

export default function Slot({
  slot,
  setDataSlot,
  // setMyResOffice,
  // setResOffice,
}) {
  // const user = useSelector((state) => state.user);
  const slotT = moment(slot.slotTime).format('YYYY-MM-DD HH:mm:ss');
  const handleClick = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/office?slot=${slotT}`)
      .then(({ data }) => {
        if (data[0]) {
          setDataSlot(data);
        }
        // data.map((item) => {
        //   if (item && user.id === item.userId) {
        //     setMyResOffice(true);
        //   } else if (item && user.id !== item.userId) {
        //     setResOffice(true);
        //   }
        // });
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
      <SSlot onClick={handleClick} type="button">
        {slot.slotDisplay}
      </SSlot>
    </>
  );
}

Slot.propTypes = {
  slot: propTypes.shape({
    slotDisplay: propTypes.string,
    slotTime: propTypes.number,
  }),
  setDataSlot: propTypes.func,
  // setMyResOffice: propTypes.func,
  // setResOffice: propTypes.func,
};

Slot.defaultProps = {
  slot: null,
  setDataSlot: () => {},
  // setMyResOffice: () => {},
  // setResOffice: () => {},
};
