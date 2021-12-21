import PropTypes from 'prop-types';
import SToggleButton from './style';

export default function ToggleButton({ label, className, handleClick }) {
  return (
    <SToggleButton
      aria-label={label}
      className={className}
      onClick={handleClick}
    >
      <span />
    </SToggleButton>
  );
}

ToggleButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

ToggleButton.defaultProps = {
  label: '',
  className: '',
  handleClick: () => {},
};
