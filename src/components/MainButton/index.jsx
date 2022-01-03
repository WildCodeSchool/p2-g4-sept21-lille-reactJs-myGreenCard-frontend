import PropTypes from 'prop-types';
import SMainButton from './style';

const MainButton = ({ content, clickCallback }) => {
  return <SMainButton onClick={clickCallback}>{content}</SMainButton>;
};

MainButton.propTypes = {
  content: PropTypes.string,
  clickCallback: PropTypes.func,
};

MainButton.defaultProps = {
  content: '',
  clickCallback: () => {},
};

export default MainButton;
