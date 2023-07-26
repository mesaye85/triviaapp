import React from 'react';

const GameFace = ({ onNavigate }) => {

  const handlePlayGame = () => {
    onNavigate('category');
  };

  const handleHighScore = () => {
    onNavigate('highscore');
  };

  return (
    <div>
      <h1>Welcome to Trivia Game</h1>
      <button onClick={handlePlayGame}>Play Game</button>
      <button onClick={handleHighScore}>High Score</button>
    </div>
  );
};

export default GameFace;
