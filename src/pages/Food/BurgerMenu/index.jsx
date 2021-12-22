import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import SMenu from './style';

function BurgerMenu() {
  return (
    <SMenu>
      <Menu>
        <ul>
          <li>
            <Link
              to="/"
              className="home"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/Food"
              className="home"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Menu du jour
            </Link>
            <li>
              <Link
                to="/Food/Profile"
                className="home"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Profil alimentaire
              </Link>
            </li>
          </li>
          <li>
            <Link
              to="/Food/randomlunch"
              className="home"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Random lunch
            </Link>
          </li>
        </ul>
      </Menu>
    </SMenu>
  );
}

export default BurgerMenu;
