import React, { useContext } from 'react';
import { DisplayContext } from '../../context';
import types from '../../reducer/types';


const Button = (props) => {
    const buttonNumber = props.number;
    const { dispatch } = useContext(DisplayContext);

    return (
        <button onClick={() => dispatch({type: types.SET_DISPLAY_VALUE, value: props.number})}>
            {buttonNumber}
        </button>
    );
};

export default Button;