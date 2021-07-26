import { useState } from "react";


const DataValidation = (valueValidation) => {
    const [userInput, setUserInput] = useState('');
    const valueIsValid = valueValidation(userInput);


    const userInputHandler = e => {

        setUserInput(e.target.value);
    }

    const resetValues = () => {
        setUserInput('');
    }

    return {
        userInput,
        valueIsValid,
        userInputHandler,
        resetValues
    }
};


export default DataValidation;