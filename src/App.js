import React from 'react';
import './App.css';
import Quiz from './Quiz';
import quizData from './quizData.json';
import './Quiz.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Quiz questions={quizData} />
    </div>
  );
}

export default App;
