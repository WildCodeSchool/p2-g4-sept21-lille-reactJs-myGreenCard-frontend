import { useState } from 'react';
import SCounter from './style';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <SCounter>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <h3>{count}</h3>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </SCounter>
  );
}
