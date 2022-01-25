import propTypes from 'prop-types';
import SSlot from './style';

export default function Slot({ slot }) {
  return <SSlot type="button">{slot.slotDisplay}</SSlot>;
}

Slot.propTypes = {
  slot: propTypes.shape({
    slotDisplay: propTypes.string,
    slotTime: propTypes.number,
  }),
};

Slot.defaultProps = {
  slot: null,
};
