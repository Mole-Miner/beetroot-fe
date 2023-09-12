import React, { useEffect, useState } from 'react';

function Effect() {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  /* useEffect(() => {
        setTimeout(() => {
            setFirstCounter((counter) => counter + 1);
        }, 1000);
    });*/

  /* useEffect(() => {
        setTimeout(() => {
            setFirstCounter((counter) => counter + 1);
        }, 1000);
    }, []);*/
  /*  useEffect(() => {
        const timeout = setTimeout(() => {
            setFirstCounter((counter) => counter + 1);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);*/

  useEffect(() => {
    setSecondCounter(() => firstCounter * 10);
  }, [firstCounter]);

  return (
    <>
      <p>First counter: {firstCounter}</p>
      <button onClick={() => setFirstCounter((counter) => counter + 1)}>
        Increase
      </button>
      <p>Second counter: {secondCounter}</p>
    </>
  );
}

export { Effect as Component };
export default Effect;
