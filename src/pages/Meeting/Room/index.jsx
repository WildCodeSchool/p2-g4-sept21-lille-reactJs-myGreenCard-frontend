import { useState } from 'react';
import Header from 'components/Header';
import logo from 'assets/reservationReunion.png';
import SRoom from './style';
import Validation from './Validation';
import AlreadyBooked from './AlreadyBooked';
import Share from './Share';

export default function Room() {
  const [validation, setValidation] = useState(true);
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const [share, setShare] = useState(false);
  const [reservation, setReservation] = useState({});

  return (
    <>
      <SRoom>
        {validation && (
          <>
            <Header logo={logo} />
            <Validation
              setAlreadyBooked={setAlreadyBooked}
              setValidation={setValidation}
              reservation={reservation}
              setReservation={setReservation}
              setShare={setShare}
            />
          </>
        )}
        {alreadyBooked && (
          <>
            <Header logo={logo} />
            <AlreadyBooked
              reservation={reservation}
              setAlreadyBooked={setAlreadyBooked}
              setValidation={setValidation}
            />
          </>
        )}
        {share && (
          <>
            <Share
              reservation={reservation}
              setValidation={setValidation}
              setShare={setShare}
            />
          </>
        )}
      </SRoom>
    </>
  );
}
