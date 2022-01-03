import { Link } from 'react-router-dom';
import SMeeting from './style';
import RoomCard from './RoomCard';
import logo from '../../assets/reservationReunion.png';
import Header from '../../components/Header';

const data = require('./meeting.json');

const dataRooms = data.rooms;

export default function Meeting() {
  return (
    <>
      <Header logo={logo} />
      <SMeeting>
        {dataRooms.map((dataRoom) => {
          const path = `${dataRoom.id}`;
          return (
            <Link to={path}>
              <RoomCard
                localisation={dataRoom.localisation}
                id={dataRoom.id}
                capacity={dataRoom.capacity}
                equipment={dataRoom.equipment}
                picture={dataRoom.picture}
              />
            </Link>
          );
        })}
      </SMeeting>
    </>
  );
}
