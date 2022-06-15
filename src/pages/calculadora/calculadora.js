import React, { useEffect } from 'react';
import Button from '../../components/button/button';
import Display from '../../components/display/display';
import { useDisplayReducer } from '../../reducer';


const Calculadora = () => {

    const buttonInfoList = [
        {
            character: '0'
        },
        {
            character: '1'
        },

    ];

    return (
        <div>
            <Display />
            {buttonInfoList.map(info => {
                return <Button number={info.character} />
            })}
            
        </div>
    );
};

export default Calculadora;