import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    function onClickCounter() {
        setCounter((prevCounter) => prevCounter + 1);
    }

    return (
       <>
           <h3>Counter</h3>
           <span>{ counter }</span>
           <button onClick={ onClickCounter }>Click</button>
       </>
    )
}

export default Counter;
