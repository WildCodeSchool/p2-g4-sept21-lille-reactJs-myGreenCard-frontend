import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import SMenu from './style';

function BurgerMenu() {
  return (
    <SMenu>
      <Menu>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Food">Menu du jour</Link>
            <li>
              <Link to="/Food/Profile">Profil alimentaire</Link>
            </li>
          </li>
          <li>
            <Link to="/Food/randomLunch">Random lunch</Link>
          </li>
        </ul>
      </Menu>
    </SMenu>
  );
}

export default BurgerMenu;
