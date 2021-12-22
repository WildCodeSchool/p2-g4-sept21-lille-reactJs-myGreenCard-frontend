import { Link } from 'react-router-dom';
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

export default function Home() {
  return (
    <SHome>
      <Link to="./Food">
        <article className="menu">
          <div className="meal">
            <h2>Le menu du jour</h2>
          </div>
          <div className="mealList">
            <div className="description">
              <li>Salade tomates et avocats</li>
              <li>Rôti de Boeuf</li>
              <li>Pizza aux trois légumes</li>
              <li>Muffin aux pépites de chocolat</li>
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
      <Link to="./Office">
        <article className="office">
          <div className="reservation">
            <h2>Réservation de bureau</h2>
          </div>
          <div className="chooseYourOffice">
            <p>Choisissez votre bureau</p>
          </div>
          <div className="officePicture">
            <img src={Office} alt={Office} />
          </div>
        </article>
      </Link>
      <Link to="./Meeting">
        <article className="meeting">
          <div className="roomReservation">
            <h2>Réservation de salle de réunion</h2>
          </div>

          <div className="meetingReservation">
            <p>Réservez votre salle de réunion</p>
          </div>
          <div className="meetingRoomPicture">
            <img src={MeetingRoom} alt={MeetingRoom} />
          </div>
        </article>
      </Link>
      <Link to="./Supplies">
        <article className="furnitures">
          <div className="commande">
            <h2>Commande de fournitures</h2>
          </div>

          <div className="shop">
            <p>Ajoutez les articles dont vous avez besoin</p>
          </div>
          <div className="furniture">
            <img src={Furnitures} alt={Furnitures} />
          </div>
        </article>
      </Link>
      <Link to="./LostCard">
        <article className="lostcard">
          <div className="card">
            <h2>Carte perdue</h2>
          </div>
          <div className="unactivCard">
            <p>Désactiver votre carte en cas de perte</p>
          </div>
          <div className="pictureCard">
            <img src={Card} alt={Card} />
          </div>
        </article>
      </Link>
    </SHome>
  );
}
