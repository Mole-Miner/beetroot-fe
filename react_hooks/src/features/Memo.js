import React, { useMemo, useState } from 'react';

function compute(num) {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

function Memo() {
  const [counter, setCounter] = useState(0);
  // const expensive = compute(counter);
  const expensive = useMemo(() => compute(counter), [counter]);

  function increment() {
    setCounter((counter) => counter + 1);
  }

  return (
    <>
      <button onClick={increment}>Counter: {counter}</button>
      <p>{expensive}</p>
    </>
  );
}

export { Memo as Component };
export default Memo;
