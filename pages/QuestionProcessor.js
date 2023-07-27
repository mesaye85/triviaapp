import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GptApi from './GptApi';

const QuestionProcessor = ({ category, onGameOver }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timer, setTimer] = useState(20);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  useEffect(() => {
    if (category === 'ChatGPT') {
      // Fetch question from GPT-3 API
      return;
    }

    axios.get(`/api/questions/${category}`)
      .then(response => {
        const shuffledQuestions = shuffleArray(response.data);
        if (!shuffledQuestions.length) {
          setError('No questions available for this category');
          return;
        }
        setQuestions(shuffledQuestions);
        setCurrentQuestion(shuffledQuestions[0]);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setError('Error fetching questions');
      });
  }, [category]);

  // Start a countdown when the current question changes
  useEffect(() => {
    if (currentQuestion) {
      setTimer(20);
      const interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer <= 0) {
            clearInterval(interval);
            onGameOver(score);  // Game Over when the timer runs out
          }
          return prevTimer - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentQuestion, onGameOver, score]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function getNextQuestion() {
    const currentQuestionIndex = questions.findIndex(q => q.id === currentQuestion.id);
    if (currentQuestionIndex >= questions.length - 1) {
      // If all questions have been answered, set a flag instead of ending the game
      setAllQuestionsAnswered(true); 
    } else {
      const nextQuestion = questions[currentQuestionIndex + 1];
      setSelectedOption(null);
      setCurrentQuestion(nextQuestion);
    }
  }
  

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
    if (e.target.value === currentQuestion.correctOption) {
      setScore(prevScore => prevScore + 100);
      getNextQuestion();
    } else {
      onGameOver(score);  // Game Over when a wrong answer is selected
    }
  }

  function handleGptQuestionFetched(questionData) {
    setQuestions([questionData]);
    setCurrentQuestion(questionData);
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (category === 'ChatGPT' && !currentQuestion) {
    return <GptApi onQuestionFetched={handleGptQuestionFetched} />;
  }
  const handlePlayAgain = () => {
    // Reset the game to the initial state
    setSelectedOption(null);
    setCurrentQuestion(questions[0]);
    setScore(0);
    setAllQuestionsAnswered(false);
  };
  if (allQuestionsAnswered) {
    return (
      <div>
        <h1>Congratulations! You have answered all questions.</h1>
        <p>Your final score is: {score}</p>
        <button onClick={handlePlayAgain}>Play Again</button>
        <button onClick={handleExit}>Exit</button>
      </div>
    );
  }
   
  const handleExit = () => {
    // Call the onGameOver function with the final score
    onGameOver(score);
  };
  
  return (
    <div>
      <h1>{currentQuestion?.question}</h1>
      <p>Time remaining: {timer} seconds</p>
      {currentQuestion && Object.entries(currentQuestion.options).map(([key, value]) => (
        <div key={key}>
          <input 
            type="radio" 
            id={key} 
            name="option" 
            value={key} 
            checked={selectedOption === key}
            onChange={handleOptionChange}
          />
          <label htmlFor={key}>{`${key}: ${value}`}</label>
        </div>
      ))}
      <p>Score: {score}</p>
    </div>
  );
};

export default QuestionProcessor;
