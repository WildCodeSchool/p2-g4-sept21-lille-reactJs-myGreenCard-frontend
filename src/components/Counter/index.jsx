import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import SCounter from './style';

export default function Counter({ setCart, id, cart }) {
  const [count, setCount] = useState(0);
  const prev = () => (count <= 0 ? 0 : setCount((prevCount) => prevCount - 1));
  const next = () => setCount((nextCount) => nextCount + 1);

  useEffect(() => {
    const newArray = cart;
    newArray[id - 1] = count;
    setCart(newArray);
  }, [count]);

  return (
    <SCounter>
      <button type="button" onClick={prev}>
        -
      </button>

      <h3>{count}</h3>

      <button type="button" onClick={next}>
        +
      </button>
    </SCounter>
  );
}

Counter.propTypes = {
  setCart: propTypes.func,
  id: propTypes.number,
  cart: propTypes.arrayOf(propTypes.number),
};
Counter.defaultProps = { setCart: () => {}, id: 0, cart: [] };
