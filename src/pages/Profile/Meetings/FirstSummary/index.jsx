import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import { useSelector } from 'react-redux';
import Participants from './Participants';

export default function FirstSummary() {
  const [meetings, setMeetings] = useState([]);
  const [active, setActive] = useState(false);
  const user = useSelector((state) => state.user);

  const handleToggle = () => {
    setActive(!active);
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/meeting/user/${user.id}`)
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
        <h3>Récapitulatif des salles de réunion (organisateur)</h3>
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
                <Participants meetingId={meeting.id} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
