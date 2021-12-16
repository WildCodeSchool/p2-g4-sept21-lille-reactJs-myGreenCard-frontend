import PropTypes from 'prop-types';
import SMainButton from './style';

const MainButton = ({ content }) => {
  return (
    <>
      <SMainButton>{content}</SMainButton>
    </>
  );
};

MainButton.propTypes = {
  content: PropTypes.string,
};

MainButton.defaultProps = {
  content: '',
};

export default MainButton;
