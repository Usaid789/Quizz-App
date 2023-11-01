import React, { useState } from 'react';
import './Quiz.css'; // Import the CSS file for styling

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {quizCompleted ? (
        <div className="quiz-results">
          <h2>Quiz completed</h2>
          <p>Your score: {score}/{questions.length}</p>
        </div>
      ) : (
        <div className="question-container">
          <h2 className="question-title">Question {currentQuestion + 1}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          <ul className="answer-list">
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index}>
                <button
                  className="answer-button"
                  onClick={() => handleAnswerClick(answer.isCorrect)}
                >
                  {answer.text}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="next-button"
            onClick={handleNextClick}
          >
            {currentQuestion + 1 < questions.length ? 'Next' : 'Finish'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
