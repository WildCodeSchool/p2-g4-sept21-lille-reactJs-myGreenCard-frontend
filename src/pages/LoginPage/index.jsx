import UserAvatar from 'components/UserAvatar';
import PropTypes from 'prop-types';
import logo from '../../assets/Img/easyApp.png';
import SLoggingPage from './style';
import ToggleButton from '../../components/ToggleButton';

export default function LoginPage({ theme, setTheme }) {
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    return setTheme(isDarkTheme ? 'light' : 'dark');
  };
  return (
    <SLoggingPage>
      <img src={logo} alt="homeIcon" />
      <ToggleButton
        label="Dark/light mode"
        handleClick={toggleTheme}
        className={isDarkTheme ? 'dark' : null}
      />
      <div classeName="UserCard">
        <UserAvatar size="200px" border="none" />
      </div>
      <form>
        <p>Email</p>
        <input type="email" />
        <p>Mot de passe</p>
        <input type="password" />
      </form>
      <p>Mot de passe oublié</p>
      <button type="button">Let&#39;s gooooo</button>
    </SLoggingPage>
  );
}

LoginPage.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};

LoginPage.defaultProps = {
  theme: '',
  setTheme: () => {},
};
