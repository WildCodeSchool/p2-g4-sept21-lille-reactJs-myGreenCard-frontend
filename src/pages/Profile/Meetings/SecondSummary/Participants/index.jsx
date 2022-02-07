import axios from 'axios';
import propTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { AvatarGroup } from '@mui/material';
import iconComputer from 'assets/computer.png';
import iconPin from 'assets/pin.png';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Participants({ meetingId }) {
  const [participants, setParticipants] = useState([]);
  const user = useSelector((state) => state.user);
  const id = meetingId;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/meeting/${id}/participants`)
      .then(({ data }) => {
        setParticipants(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <AvatarGroup className="participants" max="4">
      {participants.map((participant) => {
        return participant.UserId !== user.id ? (
          <Badge
            key={participant.picture}
            className="badge"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            badgeContent={
              <Avatar
                key={participant.picture}
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
        ) : (
          <div className="badge status">
            <Avatar
              className={
                participant.status === 'présentiel'
                  ? 'mode status'
                  : 'mode status dist'
              }
              alt={participant.status}
              src={participant.status === 'présentiel' ? iconPin : iconComputer}
            />
          </div>
        );
      })}
    </AvatarGroup>
  );
}

Participants.propTypes = {
  meetingId: propTypes.number,
};

Participants.defaultProps = {
  meetingId: 0,
};
