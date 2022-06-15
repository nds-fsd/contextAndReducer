import { useReducer } from "react";
import types from './types';


const initialState = {
    count: 0,
    displayValue: '0'
};

const reducer = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
        case types.INCREMENT_COUNT:
            newState.count = state.count + 1;
            console.log('estado previo', state.count);
            console.log('estado nuevo', newState.count);
            return newState;
        case types.RESET_COUNT:
            console.log('reset', initialState.count);
            newState.count = initialState.count;
            console.log('estado previo', state.count);
            console.log('estado nuevo', newState.count);
            return newState;
        case types.SET_DISPLAY_VALUE:
            console.log('action', action);
            console.log('state.displayValue', state.displayValue);
            debugger;
            if (state.displayValue === '0') {
                newState.displayValue = action.value;
            } else {
                newState.displayValue = state.displayValue + action.value;
            }
            return newState;
        default:
            return newState;
    }
};

export const useDisplayReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { state, dispatch };
}