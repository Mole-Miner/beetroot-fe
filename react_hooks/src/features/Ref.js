import React, { useEffect, useRef, useState } from 'react';

function Ref() {
  const inputElement = useRef();

  function focusInput() {
    inputElement.current.focus();
  }

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

/*function Ref() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}*/

export { Ref as Component };
export default Ref;
