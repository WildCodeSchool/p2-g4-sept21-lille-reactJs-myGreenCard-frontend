import { useState } from 'react';
import SCounter from './style';

export default function Counter() {
  const [count, setCount] = useState(0);
  const prev = () => (count <= 0 ? 0 : setCount((prevCount) => prevCount - 1));
  const next = () => setCount((nextCount) => nextCount + 1);

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
