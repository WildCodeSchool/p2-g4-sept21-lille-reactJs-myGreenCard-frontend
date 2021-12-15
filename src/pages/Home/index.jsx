import PropTypes from 'prop-types';
import SHome from './style';
import ToggleButton from '../../components/ToggleButton';

export default function Home({ theme, setTheme }) {
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    return setTheme(isDarkTheme ? 'light' : 'dark');
  };
  return (
    <SHome>
      <ToggleButton
        label="Dark/light mode"
        handleClick={toggleTheme}
        className={isDarkTheme ? 'dark' : null}
      />
    </SHome>
  );
}

Home.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};

Home.defaultProps = {
  theme: '',
  setTheme: () => {},
};
