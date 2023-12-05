// import React, { useState, useContext, useEffect } from 'react';
// import questions from '../questions';
// import './QuestionBox.css';

// const QuizContext = React.createContext();

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(-1);
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(10);
//   const [highlighted, setHighlighted] = useState(false);

//   const sharedData = useContext(QuizContext);

//   useEffect(() => {
//     if (currentQuestion !== -1 && currentQuestion !== questions.length) {
//       const timer = setInterval(() => {
//         setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
//       }, 1000);

//       return () => clearInterval(timer);
//     }
//   }, [currentQuestion]);

//   useEffect(() => {
//     if (timeLeft === 0) {
//       const nextQuestion = currentQuestion + 1;
//       setCurrentQuestion(nextQuestion);
//       setTimeLeft(10);
//     }
//   }, [timeLeft]);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setScore(prevScore => prevScore + 20);
//     }
//     const nextQuestion = currentQuestion + 1;
//     setCurrentQuestion(nextQuestion);
//     setTimeLeft(10);
//   };

//   const handleHighlight = () => {
//     setHighlighted(prevHighlighted => !prevHighlighted);
//   };

//   const startQuiz = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//   };

//   if (currentQuestion === -1) {
//     return (
//       <div className='qbox quiz-start'>
//         <h1>The React.js Quiz</h1>
//         <button onClick={startQuiz}>Start</button>
//       </div>
//     );
//   }

//   if (currentQuestion === questions.length) {
//     return (
//       <div className='qbox quiz-end'>
//         <h1>Quiz Ended</h1>
//         <p>Your Final Score: {score}/100</p>
//         <button onClick={startQuiz}>Restart Quiz</button>
//       </div>
//     );
//   }

//   const question = questions[currentQuestion];

//   return (
//     <div className='qbox'>
//       <div className='flexqq'>
//         <p>Question {currentQuestion + 1} : &nbsp;</p>
//         <p className={highlighted ? 'red' : 'inherit'}>{question.text}</p>
//         <button onClick={handleHighlight}>
//           {highlighted ? 'Unhighlight' : 'Highlight'}
//         </button>
//       </div>
//       <div id='options'>
//         {question.options.map((option) => (
//           <button
//             key={option.id}
//             onClick={() => handleAnswer(option.isCorrect)}
//           >
//             {option.text}
//           </button>
//         ))}
//         <div id='score'>
//           <p>Score: {score}/100</p>
//         </div>
//         <div id='score'>
//           <p>Time Left: {timeLeft} seconds</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <QuizContext.Provider value={questions}>
//       <Quiz />
//     </QuizContext.Provider>
//   );
// };

// export default App;













import React, { useState, useContext, useEffect } from 'react';
import questions from '../questions';
import './QuestionBox.css';

const QuizContext = React.createContext();

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [highlighted, setHighlighted] = useState(false);

  const sharedData = useContext(QuizContext);

  useEffect(() => {
    if (currentQuestion !== -1 && currentQuestion !== questions.length) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft === 0) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      setTimeLeft(10);
    }
  }, [timeLeft]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 20);
      setCounter(prevCounter => prevCounter + 1);
    }
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    setTimeLeft(10);
  };

  const handleHighlight = () => {
    setHighlighted(true);
  };

  const handleUnhighlight = () => {
    setHighlighted(false);
  };

  const startQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  if (currentQuestion === -1) {
    return (
      <div className='qbox quiz-start'>
        <h1>The React.js Quiz</h1>
        <button onClick={startQuiz}>Start</button>
      </div>
    );
  }

  if (currentQuestion === questions.length) {
    return (
      <div className='qbox quiz-end'>
        <h1>Quiz Ended</h1>
        <p className='counter'>You got {counter} out of {questions.length} correct</p>
        <p>Your Final Score: {score}%</p>
        <button onClick={startQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className='qbox'>
      <div className='flexer'>
        <div className='flexqq'>
        <p>Question {currentQuestion + 1} : &nbsp;</p>
        <p style={{ color: highlighted ? 'red' : 'inherit' }}>{question.text}</p>
        </div>
        <div className='topbtn-div'>
          <button className='topbtn' onClick={handleHighlight}>Highlight Text</button>
          <button className='topbtn' onClick={handleUnhighlight}>Unhighlight Text</button>
        </div>
      </div>
      <div id='options'>
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswer(option.isCorrect)}
          >
            {option.text}
          </button>
        ))}
        <div id='score'>
          <p>Score: {score}%</p>
        </div>
        <div id='score'>
          <p>Time Left: {timeLeft} seconds</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <QuizContext.Provider value={questions}>
      <Quiz />
    </QuizContext.Provider>
  );
};

export default App;