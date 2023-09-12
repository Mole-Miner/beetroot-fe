import React, { useState } from 'react';

function State() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <>
      <span>You clicked {counter} times</span>
      <button onClick={increase}>Increase</button>
    </>
  );
}

export { State as Component };
export default State;
