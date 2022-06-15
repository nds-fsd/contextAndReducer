import React, { useContext } from 'react';
import { DisplayContext } from '../../context';


const Display = (props) => {
    const { state } = useContext(DisplayContext);
    
    return (
        <div>
            <p>{state.displayValue}</p>
        </div>
    );
};

export default Display;