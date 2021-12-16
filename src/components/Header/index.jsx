import PropTypes from 'prop-types';
import SHeader from './style';

export default function Header({ logo }) {
  return (
    <SHeader>
      <img src={logo} alt="logo" />
    </SHeader>
  );
}
Header.propTypes = {
  logo: PropTypes.string,
};

Header.defaultProps = {
  logo: '',
};
