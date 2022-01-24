import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Pin({ pinClass }) {
  const [resaOffice, setResaOffice] = useState(false);
  const resTheme = () => {
    return setResaOffice(!resaOffice);
  };
  return (
    <button
      aria-label="pinButton"
      onClick={resTheme}
      type="button"
      className={resaOffice ? `buttonUser ${pinClass}` : `${pinClass}`}
    />
  );
}

Pin.propTypes = {
  pinClass: PropTypes.string,
};

Pin.defaultProps = {
  pinClass: '',
};
