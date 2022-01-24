import axios from 'axios';
import propTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { AvatarGroup } from '@mui/material';
import iconComputer from 'assets/computer.png';
import iconPin from 'assets/pin.png';
import { useState, useEffect } from 'react';

export default function Participants({ meetingId }) {
  const [participants, setParticipants] = useState([]);
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
  );
}

Participants.propTypes = {
  meetingId: propTypes.number,
};

Participants.defaultProps = {
  meetingId: 0,
};
