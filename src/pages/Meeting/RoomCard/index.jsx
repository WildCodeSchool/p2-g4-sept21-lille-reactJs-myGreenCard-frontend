import PropTypes from 'prop-types';
import SRoomCard from './style';

export default function RoomCard({
  localisation,
  capacity,
  id,
  equipment,
  picture,
}) {
  return (
    <SRoomCard>
      <h2>Salle de reunion n°{id}</h2>
      <p>{localisation}</p>
      <p>Capacité : {capacity} </p>
      <p>{equipment}</p>
      <img src={picture} alt="" />
    </SRoomCard>
  );
}

RoomCard.propTypes = {
  localisation: PropTypes.string,
  capacity: PropTypes.number,
  id: PropTypes.number,
  equipment: PropTypes.string,
  picture: PropTypes.string,
};

RoomCard.defaultProps = {
  localisation: '',
  capacity: 0,
  id: PropTypes.number,
  equipment: '',
  picture: '',
};
