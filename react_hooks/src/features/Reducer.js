import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increase_counter': {
      return {
        ...state,
        counter: state.counter + state.step
      };
    }
    case 'decrease_counter': {
      return {
        ...state,
        counter: state.counter - state.step
      };
    }
    case 'change_step': {
      return {
        ...state,
        step: action.payload
      };
    }
    case 'reset_counter': {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = { counter: 0, step: 1 };

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increase() {
    dispatch({ type: 'increase_counter' });
  }

  function decrease() {
    dispatch({ type: 'decrease_counter' });
  }

  function changeStep(e) {
    dispatch({ type: 'change_step', payload: Number(e.target.value) });
  }

  function reset() {
    dispatch({ type: 'reset_counter' });
  }

  return (
    <>
      <p>{state.counter}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <input type="number" value={state.step} onChange={changeStep} />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export { Reducer as Component };
export default Reducer;
