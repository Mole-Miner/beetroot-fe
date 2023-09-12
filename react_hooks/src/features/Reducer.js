import React, { useReducer } from 'react';

const actions = {
  increase: 'increase_counter',
  decrease: 'decrease_counter',
  reset: 'reset_counter',
  changeStep: 'chang_step'
};

function reducer(state, action) {
  switch (action.type) {
    case actions.increase: {
      return {
        ...state,
        counter: state.counter + state.step
      };
    }
    case actions.decrease: {
      return {
        ...state,
        counter: state.counter - state.step
      };
    }
    case actions.reset: {
      return {
        ...initialState
      };
    }
    case actions.changeStep: {
      return {
        ...state,
        step: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  counter: 0,
  step: 1
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increase() {
    dispatch({ type: actions.increase });
  }

  function decrease() {
    dispatch({ type: actions.decrease });
  }

  function changeStep(e) {
    dispatch({ type: actions.changeStep, payload: Number(e.target.value) });
  }

  function reset() {
    dispatch({ type: actions.reset });
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

/*
function reducer(state, action) {
  switch (action.type) {
    case actions.increase: {
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
    dispatch({ type: actions.increase });
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
*/

export { Reducer as Component };
export default Reducer;
