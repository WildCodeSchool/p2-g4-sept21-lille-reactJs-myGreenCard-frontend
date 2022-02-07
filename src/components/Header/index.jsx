import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserAvatar from '../UserAvatar';
import SHeader from './style';
import home from '../../assets/Img/home.png';

export default function Header({ logo }) {
  return (
    <SHeader>
      <Link to="/home">
        <img className="home" src={home} alt="homeIcon" />
      </Link>
      <img className="logo" src={logo} alt="logo" />
      <Link className="profile" to="/profile">
        <UserAvatar size="45px" />
      </Link>
    </SHeader>
  );
}

Header.propTypes = {
  logo: PropTypes.string,
};

Header.defaultProps = {
  logo: '',
};
