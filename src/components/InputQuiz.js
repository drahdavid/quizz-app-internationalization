import './InputQuiz.scss';
import { FormattedMessage } from 'react-intl';
import quizData from '../data/quizData';
import questionFilter from '../data/questionsFilter';

const InputQuiz = ({ arrData, setFilteredQuestions }) => {

    const categories = [...arrData.reduce((map, obj) =>
        map.set(obj.category, obj), new Map()).values()]; // Extracting Duplicates

    const handleSubmit = e => {

        const categorieData = quizData(e); // Data from CheckBox's. 

        const questionsFiltered = questionFilter(arrData, categorieData); // Filtering Data

        setFilteredQuestions(questionsFiltered); // Setting Filtered Data to State; 
    };


    return (
        <div className="ui segment">
            <form onSubmit={handleSubmit}>
                <FormattedMessage id="inputquiz.title">
                    {message => <h4>{message}</h4>}
                </FormattedMessage>
                <div className="form--quiz">
                    {categories.map((el, i) =>
                        <div key={i}>
                            <input type="checkbox" id={el.category} name={el.category} />
                            <label htmlFor={el.category} >{el.category.toUpperCase()}</label>
                        </div>)
                    }
                </div>
                <button className="form--quiz-button">Submit</button>
            </form>

        </div >
    );
}


export default InputQuiz;