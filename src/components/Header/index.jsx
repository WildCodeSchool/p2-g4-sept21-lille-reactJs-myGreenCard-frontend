
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserProfile from '../UserAvatar';
import SHeader from './style';
import home from '../../assets/Img/home.svg';

export default function Header({ logo }) {
  return (
    <SHeader>
      <Link to="/home">
        <img src={home} alt="homeIcon" />
      </Link>
      <img className="logo" src={logo} alt="logo" />
      <Link to="/profilPage">
        <UserProfile />
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

