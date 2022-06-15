import React, { useContext } from 'react';
import { DisplayContext } from '../../context';
import { useDisplayReducer } from '../../reducer';
import types from '../../reducer/types';

const Counter = () => {

    const { state, dispatch } = useContext(DisplayContext);

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: types.INCREMENT_COUNT})}>Increment</button>
            <button onClick={() => dispatch({type: types.RESET_COUNT})}>Reset</button>
            <button onClick={() => dispatch({type: types.SET_DISPLAY_VALUE, value:'5'})}>Set display 5</button>
        </div>
    )
};

export default Counter;