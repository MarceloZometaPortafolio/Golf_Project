
import React, { useState } from 'react';

/**
 * Get a number from the user and validates it to be greater than 0
 * @param {function} setFunction - Parent's function to hold children's data
 */
function InputNumber( {setFunction} ) {
    const [number, setNumber] = useState();

    /**
     * Validates user input
     * @param {*} event = data input by user 
     */
    const isValidNumber = event => {
        setNumber(event.target.value)
        if (number > 0) {
            setFunction(number);
        }
        else {
            console.error("Invalid number. Must be greater than 0");
        }
    }

    return(
        <input type="number" min={1} value={number} onChange={isValidNumber} onBlur={isValidNumber}/>
    );
}

export default InputNumber;