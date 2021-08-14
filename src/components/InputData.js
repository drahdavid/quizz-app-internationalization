import './InputData.scss';

import data from '../data/data';
import DataValidation from '../validation/DataValidation';
import { useState } from 'react';


const InputData = ({ arrData, setArrData }) => {

    const [successData, setSuccessData] = useState(false);

    // Handling Form Submission
    const handleSubmit = (e) => {
        const { payload } = data(e); // Form Ev. Handler

        if (!formValidation) return;

        setArrData([...arrData, payload]); // Setting Input Data on Lifted Up State

        setSuccessData(true); // Success Message

        resetQuestion();//Resetting Inputs
        resetAnswer();
        resetLevel();

        setTimeout(() => {
            setSuccessData(false); // Success Message Done
        }, 2000);
    };


    // INPUTS VALIDATION
    const {
        userInput: questionInput,
        valueIsValid: questionIsValid,
        userInputHandler: questionHandler,
        resetValues: resetQuestion
    } = DataValidation(value => value.trim().toLowerCase() !== '' && value.includes('?'));

    const {
        userInput: answerInput,
        valueIsValid: answerIsValid,
        userInputHandler: answerHandler,
        resetValues: resetAnswer
    } = DataValidation(value => value.trim().toLowerCase() !== '' && value.length >= 5);

    const {
        userInput: levelInput,
        valueIsValid: levelIsValid,
        userInputHandler: levelHandler,
        resetValues: resetLevel
    } = DataValidation(value => +value >= 1 && value <= 3);

    //FORM VALIDATION
    const formValidation = questionIsValid && answerIsValid && levelIsValid;



    return (
        <form onSubmit={handleSubmit} className="form semantic ui container">
            <p className={`${successData ? 'ui container segment form__p--success' : 'form__p--none'}`} id='successMessage'>SUCCESFULLY SENT</p>

            <div className={"form--container"}>
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    <option value="cinema">Cinema</option>
                    <option value="history">History</option>
                    <option value="general-culture">General Culture</option>
                    <option value="music">Music</option>
                    <option value="geography">Geography</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className={"form--container"}>
                <label htmlFor="question">Question</label>
                <input className={!questionIsValid ? 'input-not-ok' : 'input-ok'} aria-invalid={!questionIsValid} value={questionInput} onChange={questionHandler} type="text" id="question" name="question" />
                {!questionIsValid && < p className={"form--error"}>- Question should include "?".</p>}
            </div>


            <div className={"form--container"} >
                <label htmlFor="answer">Answer</label>
                <input className={!answerIsValid ? 'input-not-ok' : 'input-ok'} aria-invalid={!answerIsValid} value={answerInput} onChange={answerHandler} type="text" id="answer" name="answer" />
                {!answerIsValid && < p className={"form--error"}>- Answer should be at least 5 characters.</p>}
            </div>

            <div className={"form--container"}>
                <label htmlFor="level">Difficulty Level</label>
                <input className={!levelIsValid ? 'input-not-ok' : 'input-ok'} aria-invalid={!levelIsValid} value={levelInput} onChange={levelHandler} min="1" max="3" type="number" id="level" name="level" />
                {!levelIsValid && < p className={"form--error"}>- Level 1, 2 or 3 (easy, medium or difficult). </p>}
            </div>

            <button aria-describedby="successMessage" disabled={!formValidation} className="form--btn" >
                Submit
            </button>


        </form >


    )

};

export default InputData;
