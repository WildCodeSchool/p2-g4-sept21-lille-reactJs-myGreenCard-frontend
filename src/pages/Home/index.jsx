import Header from 'components/Header';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ToggleButton from '../../components/ToggleButton';
import logo from '../../assets/Img/easyApp.png';
import Salade from './pictures/salad.png';
import Boeuf from './pictures/beef.png';
import Pizza from './pictures/pizza.jpeg';
import Muffin from './pictures/muffin.jpeg';
import Office from './pictures/office.png';
import MeetingRoom from './pictures/meetingRoom.png';
import Furnitures from './pictures/furnitures.png';
import Card from './pictures/eazyCard.jpeg';
import SHome from './style';

const meals = [
  {
    picture: Salade,
    name: 'Salade',
  },
  {
    picture: Boeuf,
    name: 'Boeuf',
  },
  {
    picture: Pizza,
    name: 'Pizza',
  },
  {
    picture: Muffin,
    name: 'Muffin',
  },
];

export default function Home({ theme, setTheme }) {
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    return setTheme(isDarkTheme ? 'light' : 'dark');
  };
  return (
    <>
      <Header logo={logo} />
      <SHome>
        <ToggleButton
          label="Dark/light mode"
          handleClick={toggleTheme}
          className={isDarkTheme ? 'dark' : null}
        />
        <Link to="/food">
          <article className="menu">
            <div className="meal">
              <h2>Le menu du jour</h2>
            </div>
            <div className="mealList">
              <div className="description">
                <ul>
                  <li>Salade tomates et avocats</li>
                  <li>Rôti de Boeuf</li>
                  <li>Pizza aux légumes</li>
                  <li>Muffin</li>
                </ul>
              </div>
              <div className="dishes">
                {meals.map((meal) => {
                  return <img src={meal.picture} alt={meal.name} />;
                })}
              </div>
            </div>
            <div className="dinnersReady">
              <p>A Table !</p>
            </div>
          </article>
        </Link>
        <Link to="/office">
          <article className="office">
            <div className="reservation">
              <h2>Réservation de bureau</h2>
            </div>
            <div className="chooseYourOffice">
              <p>Choisissez votre bureau</p>
            </div>
            <div className="officePicture">
              <img src={Office} alt="Bureau" />
            </div>
          </article>
        </Link>
        <Link to="/meetingRooms">
          <article className="meeting">
            <div className="roomReservation">
              <h2>Réservation de salle de réunion</h2>
            </div>
            <div className="meetingReservation">
              <p>Réservez votre salle de réunion</p>
            </div>
            <div className="meetingRoomPicture">
              <img src={MeetingRoom} alt="Salle de réunion" />
            </div>
          </article>
        </Link>
        <Link to="/supplies">
          <article className="furnitures">
            <div className="order">
              <h2>Commande de fournitures</h2>
            </div>
            <div className="shop">
              <p>Ajoutez les articles dont vous avez besoin</p>
            </div>
            <div className="pictureFurniture">
              <img src={Furnitures} alt="Fournitures" />
            </div>
          </article>
        </Link>
        <Link to="/lostCard">
          <article className="lostCard">
            <div className="card">
              <h2>Carte perdue</h2>
            </div>
            <div className="unactivCard">
              <p>Désactiver votre carte en cas de perte</p>
            </div>
            <div className="pictureCard">
              <img src={Card} alt="Eazypass" />
            </div>
          </article>
        </Link>
      </SHome>
    </>
  );
}
Home.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};

Home.defaultProps = {
  theme: '',
  setTheme: () => {},
};
