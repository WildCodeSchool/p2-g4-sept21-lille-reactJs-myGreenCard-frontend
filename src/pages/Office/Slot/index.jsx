import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import SSlot from './style';

export default function Slot({
  slot,
  setDataSlot,
  setMyResOffice,
  setResOffice,
  pins,
  setPins,
}) {
  const user = useSelector((state) => state.user);
  const slotT = moment(slot.slotTime).format('YYYY-MM-DD HH:mm:ss');
  const handleClick = () => {
    const newPins = pins.map((pin) => {
      return { ...pin, slot: slotT };
    });
    setPins(newPins);

    axios
      .get(`${process.env.REACT_APP_API_URL}/office?slot=${slotT}`)
      .then(({ data }) => {
        if (data[0]) {
          setDataSlot(data);
        } else {
          setDataSlot([]);
        }
        const myResOffices = [];
        const resOffices = [];
        pins.forEach((item) => {
          let myResOffice = false;
          let resOffice = false;
          data.forEach((dataItem) => {
            if (item.number === dataItem.officeId) {
              if (user.id === dataItem.userId) {
                myResOffice = true;
              } else if (user.id !== dataItem.userId) {
                resOffice = true;
              }
            }
          });
          myResOffices.push(myResOffice);
          resOffices.push(resOffice);
        });
        setMyResOffice(myResOffices);
        setResOffice(resOffices);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
  setMyResOffice: propTypes.func,
  setResOffice: propTypes.func,
  setPins: propTypes.func,
  pins: propTypes.arrayOf(
    propTypes.shape({
      class: propTypes.string,
      number: propTypes.number,
      slot: propTypes.instanceOf(Date),
    })
  ),
};

Slot.defaultProps = {
  slot: null,
  setDataSlot: () => {},
  setMyResOffice: () => {},
  setResOffice: () => {},
  setPins: () => {},
  pins: [],
};
