import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import SMenu from './style';

function BurgerMenu() {
  return (
    <SMenu>
      <Menu>
        <section>
          <Link to="/">Accueil</Link> <br />
          <Link to="/food">Menu du jour</Link> <br />
          <Link to="/food/Profile">Profil alimentaire</Link> <br />
          <Link to="/food/randomLunch">Random lunch</Link>
        </section>
      </Menu>
    </SMenu>
  );
}

export default BurgerMenu;
