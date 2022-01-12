import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import SMenu from './style';

function BurgerMenu() {
  return (
    <SMenu>
      <Menu>
        <section>
          <Link to="/">Accueil</Link> <br />
          <Link to="/Food">Menu du jour</Link> <br />
          <Link to="/Food/Profile">Profil alimentaire</Link> <br />
          <Link to="/Food/randomLunch">Random lunch</Link>
        </section>
      </Menu>
    </SMenu>
  );
}

export default BurgerMenu;
