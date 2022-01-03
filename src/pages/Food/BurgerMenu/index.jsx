import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import SMenu from './style';

function BurgerMenu() {
  return (
    <SMenu>
      <Menu>
        <ul>
          <li>
            <Link to="/" className="home">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/Food" className="home">
              Menu du jour
            </Link>
            <li>
              <Link to="/Food/Profile" className="home">
                Profil alimentaire
              </Link>
            </li>
          </li>
          <li>
            <Link to="/Food/randomlunch" className="home">
              Random lunch
            </Link>
          </li>
        </ul>
      </Menu>
    </SMenu>
  );
}

export default BurgerMenu;
