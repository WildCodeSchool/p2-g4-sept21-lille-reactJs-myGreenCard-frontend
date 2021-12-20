import { useState } from 'react';
import Header from '../../../components/Header';
import SRoom from './style';
import logo from '../../../assets/reservationReunion.png';
import Validation from './Validation';
import AlreadyBooked from './AlreadyBooked';

export default function Room() {
  const [validation, setValidation] = useState(true);
  const [alreadyBooked, setAlreadyBooked] = useState(false);

  return (
    <>
      <Header logo={logo} />
      <SRoom>
        {validation && (
          <Validation
            setAlreadyBooked={setAlreadyBooked}
            setValidation={setValidation}
          />
        )}
        {alreadyBooked && <AlreadyBooked />}
      </SRoom>
    </>
  );
}
