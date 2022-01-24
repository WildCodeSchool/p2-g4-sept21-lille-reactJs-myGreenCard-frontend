import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Avatar from '@mui/material/Avatar';
import 'moment/locale/fr';
import { useSelector } from 'react-redux';
import Participants from './Participants';

export default function SecondSummary() {
  const [meetings, setMeetings] = useState([]);
  const [active, setActive] = useState(false);
  const user = useSelector((state) => state.user);

  const handleToggle = (e) => {
    console.log(e);
    setActive(!active);
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/meeting/participants/${user.id}`)
      .then(({ data }) => {
        setMeetings(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [active]);
  return (
    <>
      <button type="button" onClick={handleToggle}>
        <h3>Récapitulatif des salles de réunion (participant)</h3>
      </button>
      {active && (
        <ul>
          {meetings.map((meeting) => {
            return (
              <li key={meeting.beginning}>
                {`Salle n°${meeting.meetingRoomId}, ${
                  meeting.location
                }, le ${moment(meeting.beginning).format(
                  'dddd Do MMMM'
                )} à ${moment(meeting.beginning).format('H')}h`}
                <div className="promoter">
                  <p>
                    Organisateur : {meeting.firstname} {meeting.lastname}
                  </p>
                  <Avatar
                    className="participant"
                    alt="Stock avatar"
                    src={meeting.picture}
                  />
                </div>
                <Participants meetingId={meeting.id} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
