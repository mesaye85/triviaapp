import React from 'react';

const GameOver = ({ score }) => {
  const history = useHistory();

  function handlePlayAgain() {
    history.push('/category');  // replace '/category' with your actual Category component route
  }

  function handleExit() {
    history.push('/');  // replace '/' with your actual GameFace component route
  }
  const { score } = useLocation().state;

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
