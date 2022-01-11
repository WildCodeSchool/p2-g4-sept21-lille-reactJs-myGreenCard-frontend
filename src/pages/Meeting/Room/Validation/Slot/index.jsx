import propTypes from 'prop-types';
import SSlot from './style';

export default function Slot({ slot }) {
  return (
    <SSlot
      type="button"
      // className={slot.occupation === 'yes' ? 'reserved' : null}
      key={slot.slotDisplay}
      // onClick={() => {
      //   setReservation({
      //     roomId: id,
      //     day: day.name,
      //     slot: slot.description,
      //   });
      //   handleClick(slot.occupation);
      // }}
    >
      {slot.slotDisplay}
    </SSlot>
  );
}

Slot.propTypes = {
  slot: propTypes.shape({
    slotDisplay: propTypes.string,
    slotTime: propTypes.string,
  }),
};

Slot.defaultProps = {
  slot: null,
};
