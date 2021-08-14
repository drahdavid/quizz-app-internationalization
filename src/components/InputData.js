import './InputData.scss';
import { FormattedMessage } from 'react-intl';
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
                <FormattedMessage id="inputdata.cat">
                    {message => <label htmlFor="category">{message}</label>}
                </FormattedMessage>

                <select name="category" id="category">
                    <FormattedMessage id="inputdata.cine">
                        {message => <option value='cine'>{message}</option>}
                    </FormattedMessage>

                    <FormattedMessage id="inputdata.historia">
                        {message => <option value='historia'>{message}</option >}
                    </FormattedMessage>

                    <FormattedMessage id="inputdata.cultura">
                        {message => <option value='cultura'>{message}</option >}
                    </FormattedMessage>

                    <FormattedMessage id="inputdata.musica">
                        {message => <option value='musica'>{message}</option >}
                    </FormattedMessage>

                    <FormattedMessage id="inputdata.geo">
                        {message => <option value='geografia'>{message}</option >}
                    </FormattedMessage>

                    <FormattedMessage id="inputdata.otros">
                        {message => <option value='otros'>{message}</option >}
                    </FormattedMessage>

                </select>
            </div>

            <div className={"form--container"}>
                <FormattedMessage id="inputdata.pregunta">
                    {message => <label htmlFor="question">{message}</label>}
                </FormattedMessage>
                <input className={!questionIsValid ? 'input-not-ok' : 'input-ok'} aria-invalid={!questionIsValid} value={questionInput} onChange={questionHandler} type="text" id="question" name="question" />
                {!questionIsValid && <FormattedMessage id="inputdata.error-pregunta">
                    {message => <p className="form--error">{message}</p>}
                </FormattedMessage>}
            </div>


            <div className={"form--container"} >
                <FormattedMessage id="inputdata.respuesta">
                    {message => <label htmlFor="answer">{message}</label>}
                </FormattedMessage>

                <input className={!answerIsValid ? 'input-not-ok' : 'input-ok'} aria-invalid={!answerIsValid} value={answerInput} onChange={answerHandler} type="text" id="answer" name="answer" />
                {!answerIsValid &&
                    <FormattedMessage id="inputdata.error-respuesta">
                        {message => <p className="form--error">{message}</p>}
                    </FormattedMessage>}


            </div>

            <div className={"form--container"}>
                <FormattedMessage id="inputdata.nivel">
                    {message => <label htmlFor="level">{message}</label>}
                </FormattedMessage>

                <input className={!levelIsValid ? 'input-not-ok' : 'input-ok'} aria-invalid={!levelIsValid} value={levelInput} onChange={levelHandler} min="1" max="3" type="number" id="level" name="level" />
                {!levelIsValid &&
                    <FormattedMessage id="inputdata.error-nivel">
                        {message => <p className="form--error">{message}</p>}
                    </FormattedMessage>}
            </div>

            <FormattedMessage id="inputdata.boton-enviar">
                {message => <button aria-describedby="successMessage" disabled={!formValidation} className="form--btn">{message}</button>}
            </FormattedMessage>



        </form >


    )

};

export default InputData;
