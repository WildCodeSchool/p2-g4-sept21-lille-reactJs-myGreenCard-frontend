import { useParams } from 'react-router';
import Header from '../../../components/Header';
import SRoom from './style';
import logo from '../../../assets/reservationReunion.png';

const data = require('../meeting.json');

const dataRooms = data.rooms;
console.log(dataRooms);
export default function Room() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Header logo={logo} />
      <SRoom>
        <img src={dataRooms[id - 1].picture} alt="Salle de réunion" />
        <h2>Salle de réunion n°{id}</h2>
      </SRoom>
    </>
  );
}
