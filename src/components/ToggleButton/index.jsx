import PropTypes from 'prop-types';
import SToggleButton from './style';

export default function ToggleButton({ label, className, handleClick, size }) {
  return (
    <SToggleButton
      aria-label={label}
      className={className}
      onClick={handleClick}
      size={size}
    >
      <span />
    </SToggleButton>
  );
}

ToggleButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  size: PropTypes.number,
};

ToggleButton.defaultProps = {
  label: '',
  className: '',
  size: 1,
  handleClick: () => {},
};
