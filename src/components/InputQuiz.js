import './InputQuiz.css';

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
                <h4 className="ui dividing header">Select Quiz Categories to start Playing</h4>
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