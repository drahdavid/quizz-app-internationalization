import './QuizUi.css';
import { useState } from 'react';
const QuizUi = ({ filteredQuestions }) => {


    const [questionNumber, setQuestionNumber] = useState(0);
    const [answering, setAnwering] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false)


    const handleNextQuestion = () => {
        setShowAnswer(false);
        setQuestionNumber(questionNumber + 1)
        console.log(questionNumber, filteredQuestions.length);

        if ((filteredQuestions.length - 1) === questionNumber) {
            setQuestionNumber(0);
            filteredQuestions.splice(0, filteredQuestions.length);

            return;
        }
    }

    if (filteredQuestions.length > 0) {
        return (
            <div className={"card-questions"}>
                {filteredQuestions.map((el, i) => {

                    if (i === questionNumber) {
                        return (
                            <div key={i}>
                                <table className="ui definition table">
                                    <tbody>
                                        <tr>
                                            <td className="two wide column">Category</td>
                                            <td>{el.category.toUpperCase()}</td>
                                        </tr>
                                        <tr>
                                            <td>Question</td>
                                            <td>{el.question}</td>
                                        </tr>
                                        <tr>
                                            <td>Answer</td>
                                            <td>
                                                {!showAnswer ? <input onFocus={() => setAnwering(true)} type="text"></input> : <p>{el.answer}</p>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Difficulty Level</td>
                                            <td>{el.level}{el.level === '1' ? '-Easy' : '' || el.level === '2' ? '-Medium' : '-Hard'}</td>
                                        </tr>

                                    </tbody>

                                </table>
                                <div>
                                    {answering && < button type="submit" onClick={() => setShowAnswer(true)}>Show the Answer</button>}
                                    {answering && < button type="submit" onClick={handleNextQuestion}> Next Question</button>}
                                </div>
                            </div>
                        )
                    }
                })
                }
            </div >
        )
    }

    else {
        return (
            <div>
                <p className="container ui segment card-preplay">Select a Category! </p>
            </div>
        )
    }

};

export default QuizUi;
