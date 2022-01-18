import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from 'assets/reservationReunion.png';
import Header from 'components/Header';
import SMeeting from './style';
import RoomCard from './RoomCard';

export default function Meeting() {
  const [dataRooms, setDataRooms] = useState([]);

  const initMeeting = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/meetingReset`).catch((e) => {
      console.log(e);
    });
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/meetingRoom`)
      .then(({ data }) => {
        setDataRooms(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Header logo={logo} />
      <SMeeting>
        {dataRooms.map((dataRoom) => {
          const path = `${dataRoom.number}`;
          return (
            <Link key={dataRoom.id} to={path}>
              <RoomCard
                localisation={dataRoom.location}
                number={dataRoom.number}
                capacity={dataRoom.capacity}
                equipment={dataRoom.equipment}
                picture={dataRoom.picture}
              />
            </Link>
          );
        })}
        <button
          onClick={() => {
            initMeeting();
          }}
          className="init"
          type="button"
          aria-label="Bouton réinitialisaton base de données"
        />
      </SMeeting>
    </>
  );
}
