import Avatar from '@mui/material/Avatar';
import propTypes from 'prop-types';
import { useState } from 'react';
import MainButton from 'components/MainButton';
import SShare from './style';
import SharePopup from './SharePopup';

const data = require('../../meeting.json');

const dataRooms = data.rooms;

export default function Share({ reservation, setValidation, setShare }) {
  const [sharePopup, setSharePopup] = useState(false);

  const showSharePopup = () => {
    setSharePopup(true);
  };
  return (
    <SShare>
      <p>Vous venez de reserver la salle de réunion n° {reservation.roomId}</p>
      <Avatar
        alt="Salle de réunion"
        src={dataRooms[reservation.roomId - 1].picture}
        className="meetingRoom"
      />
      <p>Partagez cette réunion avec vos collègues</p>
      <MainButton
        clickCallback={() => {
          showSharePopup();
        }}
        content="Partager la réunion"
      />
      {sharePopup && (
        <SharePopup
          setSharePopup={setSharePopup}
          setValidation={setValidation}
          setShare={setShare}
        />
      )}
    </SShare>
  );
}

Share.propTypes = {
  reservation: propTypes.shape({
    roomId: propTypes.string,
    day: propTypes.string,
    slot: propTypes.string,
  }),
  setValidation: propTypes.func,
  setShare: propTypes.func,
};
Share.defaultProps = {
  reservation: null,
  setValidation: () => {},
  setShare: () => {},
};
