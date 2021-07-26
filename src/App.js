
import { useState } from 'react';
import InputData from './components/InputData';
import InputQuiz from './components/InputQuiz';
import QuizUi from './components/QuizUi';


function App() {

  const [arrData, setArrData] = useState([
    { category: "cinema", question: "Who directed Reservoir Dogs? ", answer: "Quentin Tarantino", level: "1" },
    { category: "cinema", question: "In which year was Matrix released?", answer: "Was released on 1997", level: "2" },
    { category: "history", question: "Which countries did San Martin freed? ", answer: "Argentina,Peru and Chile", level: "2" },
    { category: "history", question: "Which color is the withe horse of San Martin?", answer: "White", level: "1" },
    { category: "music", question: "Which was the name of the singer Audioslave?", answer: "Chris Cornell", level: "1" },
    { category: "music", question: "Which is the name of the first album of the Beatles?", answer: "Please Please me", level: "3" },

  ]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);




  return (
    <div className="App">
      <InputData
        arrData={arrData}
        setArrData={setArrData}>
      </InputData>

      <InputQuiz
        setFilteredQuestions={setFilteredQuestions}
        arrData={arrData}>
      </InputQuiz>

      <QuizUi filteredQuestions={filteredQuestions}>
      </QuizUi>
    </div >
  );
}

export default App;
