import Header from 'components/Header';
import ToggleButton from 'components/ToggleButton';
import { useState } from 'react';
import logo from 'assets/Img/easyApp.png';
import randomTime from 'assets/Img/RandomLunchPictures/randomTime.png';
import concentration from 'assets/Img/RandomLunchPictures/concentration.png';
import User1 from 'assets/Img/users/e1.png';
import User2 from 'assets/Img/users/e2.png';
import User3 from 'assets/Img/users/e3.png';
import User4 from 'assets/Img/users/e4.png';
import SRandomLunch from './style';

export default function RandomLunch() {
  const [randomLunch, setRandomLunch] = useState(true);
  const toggleTheme = () => {
    return setRandomLunch(!randomLunch);
  };
  const users = [
    {
      picture: User1,
      name: 'User 1',
      job: 'job1',
    },
    {
      picture: User2,
      name: 'User 2',
      job: 'job2',
    },
    {
      picture: User3,
      name: 'User 3',
      job: 'job3',
    },
    {
      picture: User4,
      name: 'User 4',
      job: 'job4',
    },
  ];
  return (
    <>
      <Header logo={logo} />
      <SRandomLunch>
        <div className="randomLunch">
          <h2>Voulez-vous activer le Random Lunch ?</h2>
          <ToggleButton
            handleClick={toggleTheme}
            className={randomLunch ? null : 'dark'}
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
              {users.map((user) => {
                return (
                  <div className="guests">
                    <div className="circle" />
                    <img src={user.picture} alt={user.name} />
                    <h2 className="name">{user.name}</h2>
                    <h3 className="job">{user.job}</h3>
                  </div>
                );
              })}
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
