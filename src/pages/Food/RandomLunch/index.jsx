import Header from 'components/Header';
import ToggleButton from 'components/ToggleButton';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import logo from 'assets/Img/easyApp.png';
import randomTime from 'assets/Img/RandomLunchPictures/randomTime.png';
import concentration from 'assets/Img/RandomLunchPictures/concentration.png';
import darkLogo from 'assets/Img/easyAppDark.png';
import SRandomLunch from './style';

export default function RandomLunch() {
  const user = useSelector((state) => state.user);
  const { id } = user;
  const [dataPeople, setDataPeople] = useState([]);
  const [randomLunch, setRandomLunch] = useState(true);
  const toggleTheme = () => {
    return setRandomLunch(!randomLunch);
  };
  const themeStorage = localStorage.getItem('theme');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${id}/randomLunch`)
      .then(({ data }) => {
        setDataPeople(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Header logo={themeStorage === 'light' ? logo : darkLogo} />
      <SRandomLunch>
        <div className="randomLunch">
          <h2>Voulez-vous activer le Random Lunch ?</h2>
          <ToggleButton
            handleClick={toggleTheme}
            className={randomLunch ? 'lunch darkLunch' : 'darkLunch'}
            size={1}
          />
        </div>
        {randomLunch ? (
          <>
            <div className="randomTime">
              <div className="clock">
                <img src={randomTime} alt="horloge" />
              </div>
              <div className="waiting">
                <h3>En attente de réponse...</h3>
              </div>
              <p>Patio, ce jour à 12h35</p>
            </div>
            <div className="users">
              {dataPeople.map((oneUser) => {
                return (
                  <div key={oneUser.id} className="guests">
                    <div className="circle" />
                    <img src={oneUser.picture} alt={oneUser.name} />
                    <p className="name">{oneUser.firstname}</p>
                    <p className="job">{oneUser.job}</p>
                  </div>
                );
              })}
              <div className="guests currUser">
                <div className="circle" />
                <img src={user.picture} alt={user.name} />
                <p className="name">{user.firstname}</p>
                <p className="job">{user.job}</p>
              </div>
            </div>
            <div className="button">
              <button className="cancelRandomLunch" type="button">
                Annuler l&#39;invitation
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="doNotDisturb">
              <img src={concentration} alt="Random Lunch désactivé" />
            </div>
            <div className="noRandomLunch">
              <h3>Random Lunch Désactivé</h3>
            </div>
          </>
        )}
      </SRandomLunch>
    </>
  );
}
