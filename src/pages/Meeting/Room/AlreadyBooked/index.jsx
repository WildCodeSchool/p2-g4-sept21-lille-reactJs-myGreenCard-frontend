import propTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import avatarManon from 'assets/Img/users/e1.png';
import avatarPauline from 'assets/Img/users/e2.png';
import avatarJules from 'assets/Img/users/e3.png';
import avatarSamuel from 'assets/Img/users/e4.png';
import avatarAlexandre from 'assets/Img/users/e5.png';
import avatarMaxime from 'assets/Img/users/e6.png';
import { AvatarGroup } from '@mui/material';
import iconComputer from 'assets/computer.png';
import iconPin from 'assets/pin.png';
import MainButton from 'components/MainButton';

import SAlreadyBooked from './style';

const data = require('../../meeting.json');

const dataRooms = data.rooms;

export default function AlreadyBooked({
  reservation,
  setAlreadyBooked,
  setValidation,
}) {
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
            alt="Stock avatar"
            src={avatarMaxime}
          />
        }
      >
        <Avatar
          alt="Salle de réunion"
          src={dataRooms[reservation.roomId - 1].picture}
          className="meetingRoom"
        />
      </Badge>

      <h2>Bureau n° {reservation.roomId}</h2>
      <p>
        Réservé par Maxime pour le créneau de {reservation.slot}
        {reservation.day}
      </p>
      <AvatarGroup className="participants" max="4">
        <Badge
          className="badge"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          badgeContent={
            <Avatar className="mode" alt="En présentiel" src={iconPin} />
          }
        >
          <Avatar
            className="participant"
            alt="Stock avatar"
            src={avatarManon}
          />
        </Badge>
        <Badge
          className="badge"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          badgeContent={
            <Avatar
              className="mode dist"
              alt="En distanciel"
              src={iconComputer}
            />
          }
        >
          <Avatar
            className="participant"
            alt="Stock avatar"
            src={avatarPauline}
          />
        </Badge>
        <Badge
          className="badge"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          badgeContent={
            <Avatar className="mode" alt="En présentiel" src={iconPin} />
          }
        >
          <Avatar
            className="participant"
            alt="Stock avatar"
            src={avatarJules}
          />
        </Badge>
        <Badge
          className="badge"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          badgeContent={
            <Avatar className="mode" alt="En présentiel" src={iconPin} />
          }
        >
          <Avatar
            className="participant"
            alt="Stock avatar"
            src={avatarSamuel}
          />
        </Badge>
        <Badge
          className="badge"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          badgeContent={
            <Avatar className="mode" alt="En présentiel" src={iconPin} />
          }
        >
          <Avatar
            className="participant"
            alt="Stock avatar"
            src={avatarAlexandre}
          />
        </Badge>
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
    roomId: propTypes.string,
    day: propTypes.string,
    slot: propTypes.string,
  }),
};

AlreadyBooked.defaultProps = {
  setAlreadyBooked: () => {},
  setValidation: () => {},
  reservation: null,
};
