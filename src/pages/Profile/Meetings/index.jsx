import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import SMeetings from './style';

export default function Meetings() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/meeting/user/${3}`)
      .then(({ data }) => {
        setMeetings(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <SMeetings>
      <h2>Mes reunions</h2>
      <h3>Récapitulatif des salles de réunion réservées</h3>
      <ul>
        {console.log(meetings)}
        {meetings.map((meeting) => {
          return (
            <li key="meeting.id">
              {`Salle n°${meeting.meetingRoomId}, ${
                meeting.location
              }, le ${moment(meeting.beninning).format('dddd Do MMMM')}`}
            </li>
          );
        })}
      </ul>
    </SMeetings>
  );
}
