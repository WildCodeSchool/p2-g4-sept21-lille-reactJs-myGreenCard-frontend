import PropTypes from 'prop-types';
import SLoggingPage from './style';
import ToggleButton from '../../components/ToggleButton';

export default function LoginPage({ theme, setTheme }) {
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    return setTheme(isDarkTheme ? 'light' : 'dark');
  };
  return (
    <SLoggingPage>
      <ToggleButton
        label="Dark/light mode"
        handleClick={toggleTheme}
        className={isDarkTheme ? 'dark' : null}
      />
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
