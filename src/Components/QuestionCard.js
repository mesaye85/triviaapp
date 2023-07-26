import React, { useState } from 'react';

const QuestionCard = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{question.text}</h1>
      {question.options.map((option, index) => (
        <div key={index}>
          <input 
            type="radio" 
            id={`option-${index}`} 
            name="option" 
            value={option} 
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionCard;
