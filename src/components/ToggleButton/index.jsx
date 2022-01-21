import PropTypes from 'prop-types';
import SToggleButton from './style';

export default function ToggleButton({
  label,
  className,
  handleClick,
  size,
  trueColor,
  falseColor,
  truePoint,
  falsePoint,
}) {
  return (
    <SToggleButton
      aria-label={label}
      className={className}
      onClick={handleClick}
      size={size}
      trueColor={trueColor}
      falseColor={falseColor}
      truePoint={truePoint}
      falsePoint={falsePoint}
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
  trueColor: PropTypes.string,
  falseColor: PropTypes.string,
  truePoint: PropTypes.string,
  falsePoint: PropTypes.string,
};

ToggleButton.defaultProps = {
  label: '',
  className: '',
  size: 1,
  handleClick: () => {},
  trueColor: 'black',
  falseColor: 'white',
  truePoint: 'white',
  falsePoint: 'black',
};
