
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { allMessages } from './i18n/messages';
import InputData from './components/InputData';
import InputQuiz from './components/InputQuiz';
import QuizUi from './components/QuizUi';
import Button from './UI/Button';


function App() {
  const [language, setLanguage] = useState('es-AR');
  const currentLocale = language;
  const messages = allMessages[currentLocale];



  const [arrData, setArrData] = useState([
    { category: "cine", question: "Who directed Reservoir Dogs? ", answer: "Quentin Tarantino", level: "1" },
    { category: "cine", question: "In which year was Matrix released?", answer: "Was released on 1997", level: "2" },
    { category: "historia", question: "Which countries did San Martin freed? ", answer: "Argentina,Peru and Chile", level: "2" },
    { category: "historia", question: "Which color is the withe horse of San Martin?", answer: "White", level: "1" },
    { category: "musica", question: "Which was the name of the singer Audioslave?", answer: "Chris Cornell", level: "1" },
    { category: "musica", question: "Which is the name of the first album of the Beatles?", answer: "Please Please me", level: "3" },

  ]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);


  return (
    <IntlProvider locale={currentLocale} messages={messages}>

      <div className="App">
        <Button setLanguage={setLanguage} language={language}></Button>
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

      
    </IntlProvider>
  );
}

export default App;
