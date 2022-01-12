import Avatar from '@mui/material/Avatar';
import propTypes from 'prop-types';
import { useState } from 'react';
import MainButton from 'components/MainButton';
import SShare from './style';
import SharePopup from './SharePopup';

export default function Share({ reservation, setValidation, setShare }) {
  const [sharePopup, setSharePopup] = useState(false);

  const showSharePopup = () => {
    setSharePopup(true);
  };
  return (
    <SShare>
      {console.log(reservation)}
      <p>
        Vous venez de reserver la salle de réunion n°
        {reservation.roomId}
      </p>
      <Avatar
        alt="Salle de réunion"
        src={reservation.roomPicture}
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
    slot: propTypes.string,
    userFirstname: propTypes.string,
    userLastname: propTypes.string,
    userPicture: propTypes.string,
    roomPicture: propTypes.string,
  }),
  setValidation: propTypes.func,
  setShare: propTypes.func,
};
Share.defaultProps = {
  reservation: null,
  setValidation: () => {},
  setShare: () => {},
};
