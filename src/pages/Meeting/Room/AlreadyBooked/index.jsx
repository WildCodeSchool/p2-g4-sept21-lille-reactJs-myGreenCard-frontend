import propTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import 'moment/locale/fr';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
// import avatarMaxime from 'assets/Img/users/e6.png';
import { AvatarGroup } from '@mui/material';
import iconComputer from 'assets/computer.png';
import iconPin from 'assets/pin.png';
import MainButton from 'components/MainButton';
import { useState, useEffect } from 'react';
import SAlreadyBooked from './style';

export default function AlreadyBooked({
  reservation,
  setAlreadyBooked,
  setValidation,
}) {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const { id } = reservation;
    axios
      .get(`http://localhost:5000/meeting/${id}/participants`)

      .then(({ data }) => {
        setParticipants(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const showValidation = () => {
    setAlreadyBooked(false);
    setValidation(true);
  };
  return (
    <SAlreadyBooked>
      <Badge
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        badgeContent={
          <Avatar
            className="smallAvatar"
            alt="avatar personne qui réserve"
            src={reservation.userPicture}
          />
        }
      >
        <Avatar
          alt="Salle de réunion"
          src={reservation.roomPicture}
          className="meetingRoom"
        />
      </Badge>

      <h2>Bureau n° {reservation.roomId}</h2>
      <p>
        Réservé par Maxime pour le créneau de
        {moment(reservation.slot).format('  HH ')}h
        {moment(reservation.slot).format('  dddd ')}
      </p>
      <AvatarGroup className="participants" max="4">
        {participants.map((participant) => {
          return (
            <Badge
              key={participant.picture}
              className="badge"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              badgeContent={
                <Avatar
                  className={
                    participant.status === 'présentiel' ? 'mode' : 'mode dist'
                  }
                  alt={participant.status}
                  src={
                    participant.status === 'présentiel' ? iconPin : iconComputer
                  }
                />
              }
            >
              <Avatar
                className="participant"
                alt="Stock avatar"
                src={participant.picture}
              />
            </Badge>
          );
        })}
      </AvatarGroup>
      <MainButton
        clickCallback={() => {
          showValidation();
        }}
        content="Voir les prochaines disponibilités"
      />
    </SAlreadyBooked>
  );
}

AlreadyBooked.propTypes = {
  setAlreadyBooked: propTypes.func,
  setValidation: propTypes.func,
  reservation: propTypes.shape({
    id: propTypes.number,
    roomId: propTypes.number,
    slot: propTypes.string,
    userFirstname: propTypes.string,
    userLastname: propTypes.string,
    userPicture: propTypes.string,
    roomPicture: propTypes.string,
  }),
};

AlreadyBooked.defaultProps = {
  setAlreadyBooked: () => {},
  setValidation: () => {},
  reservation: null,
};
