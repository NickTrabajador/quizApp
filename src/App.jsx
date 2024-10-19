import React, { useState } from 'react';
import './App.css';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const questions = [
    {
      questionText: '¿Cuál es el equipo con más títulos en la historia de la Champions League?',
      answerOptions: [
        { answerText: 'Liverpool', isCorrect: false },
        { answerText: 'AcMilan', isCorrect: false },
        { answerText: 'RealMadrid', isCorrect: true },
        { answerText: 'Barcelona', isCorrect: false },
      ],
    },
    {
      questionText: '¿Quien es el goleador historico de la Champions League?',
      answerOptions: [
        { answerText: '"CristianoRonaldo', isCorrect: true },
        { answerText: 'Neymar', isCorrect: false },
        { answerText: 'Messi', isCorrect: false },
        { answerText: 'Benzema', isCorrect: false },
      ],
    },
    {
      questionText: '¿En qué país se originó el fútbol moderno?',
      answerOptions: [
        { answerText: '"GranBretaña', isCorrect: false },
        { answerText: 'Inglaterra', isCorrect: true },
        { answerText: 'Francia', isCorrect: false },
        { answerText: 'Italia', isCorrect: false },
      ],
    },
    {
      questionText: '¿En qué país se jugó la Copa Mundial de la FIFA 2014?',
      answerOptions: [
        { answerText: '"Alemania', isCorrect: false },
        { answerText: 'Rusia', isCorrect: false },
        { answerText: 'Brasil', isCorrect: true },
        { answerText: 'Qatar', isCorrect: false },
      ],
    },
    {
      questionText: ' ¿Qué selección ganó la Copa Mundial de la FIFA en 1998?',
      answerOptions: [
        { answerText: '"Italia', isCorrect: false },
        { answerText: 'Francia', isCorrect: true },
        { answerText: 'Brasil', isCorrect: false },
        { answerText: 'Argentina', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué equipo ganó la primera Copa Mundial de la FIFA en 1930?',
      answerOptions: [
        { answerText: 'Italia', isCorrect: false },
        { answerText: 'Francia', isCorrect: false },
        { answerText: 'Brasil', isCorrect: false },
        { answerText: 'Uruguay', isCorrect: true },
      ],
    },
    {
      questionText: '¿En qué año debutó Lionel Messi con el primer equipo del FC Barcelona?',
      answerOptions: [
        { answerText: '2004', isCorrect: true },
        { answerText: '2000', isCorrect: false },
        { answerText: '2002', isCorrect: false },
        { answerText: '2003', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué equipo sudamericano ha ganado la mayor cantidad de Copas Libertadores?',
      answerOptions: [
        { answerText: 'Independiente', isCorrect: false },
        { answerText: 'BocaJuniors', isCorrect: true },
        { answerText: 'RiverPlate', isCorrect: false },
        { answerText: 'Flamengo', isCorrect: false },
      ],
    },
    {
      questionText: '¿Cuál es el único país que ha participado en todas las ediciones de la Copa Mundial de la FIFA?',
      answerOptions: [
        { answerText: 'Brasil', isCorrect: true },
        { answerText: 'Francia', isCorrect: false },
        { answerText: 'Brasil', isCorrect: false },
        { answerText: 'Uruguay', isCorrect: false },
      ],
    },
    {
      questionText: '¿En que pais se jugó el segundo Mundial de Fútbol??',
      answerOptions: [
        { answerText: 'Francia', isCorrect: false },
        { answerText: 'Italia', isCorrect: true },
        { answerText: 'Brasil', isCorrect: false },
        { answerText: 'Inglaterra', isCorrect: false },
      ],
    },
    {
      questionText: '¿Que jugador ha ganado el mayor número de títulos de la Uefa Champions League?',
      answerOptions: [
        { answerText: 'Carvajal', isCorrect: false },
        { answerText: 'Marcelo', isCorrect: false },
        { answerText: 'PacoGento', isCorrect: true },
        { answerText: 'AlfredoDiStefano', isCorrect: false },
      ],
    },
    {
      questionText: '¿Quien fue el primer equipo en ganar un sextete?',
      answerOptions: [
        { answerText: 'RealMadrid', isCorrect: false },
        { answerText: 'ManchesterU', isCorrect: false },
        { answerText: 'BayerMunich', isCorrect: false },
        { answerText: 'Barcelona', isCorrect: true },
      ],
    },
  ];
    
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      if (questions[currentQuestion].answerOptions.find(option => option.answerText === selectedOption).isCorrect) {
        setScore(score + 1);
      }
      
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(''); // Reiniciar la selección
      } else {
        setShowScore(true);
      }
    }
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setSelectedOption('');
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          <h2>Has completado el quiz!</h2>
          <p>Tu puntaje es {score} de {questions.length}</p>
          <button onClick={handleRestartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].questionText}</h2>
          <div className="options-section">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option.answerText}
                    checked={selectedOption === option.answerText}
                    onChange={handleOptionChange}
                  />
                  {option.answerText}
                </label>
              </div>
            ))}
          </div>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            Siguiente Pregunta
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;