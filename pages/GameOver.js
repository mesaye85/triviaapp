import React from 'react';

const GameOver = ({ score, onNavigate }) => {

  function handlePlayAgain() {
    onNavigate('category');
  }

  function handleExit() {
    onNavigate('gameface');
  }

  return (
    <div>
      <h1>Game Over</h1>
      <p>Your final score is: {score}</p>
      <button onClick={handlePlayAgain}>Play Again</button>
      <button onClick={handleExit}>Exit Game</button>
    </div>
  );
};

export default GameOver;
