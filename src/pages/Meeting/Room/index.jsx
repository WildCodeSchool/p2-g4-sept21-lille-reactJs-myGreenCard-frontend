import { useState } from 'react';
import Header from 'components/Header';
import logo from 'assets/reservationReunion.png';
import logoDark from 'assets/reservationReunionNight.png';
import SRoom from './style';
import Validation from './Validation';
import AlreadyBooked from './AlreadyBooked';
import Share from './Share';

export default function Room() {
  const [validation, setValidation] = useState(true);
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const [share, setShare] = useState(false);
  const [reservation, setReservation] = useState({});
  const themeStorage = localStorage.getItem('theme');
  return (
    <>
      <SRoom>
        {validation && (
          <>
            <Header logo={themeStorage === 'light' ? logo : logoDark} />
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
            <Header logo={themeStorage === 'light' ? logo : logoDark} />
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
