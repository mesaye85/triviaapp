import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Session = ({ score, onNewHighScore }) => {
  const [highScore, setHighScore] = useState(0);
  const [newHighScore, setNewHighScore] = useState(false);

  useEffect(() => {
    // Fetch the current high score from the server when the component mounts
    axios.get('/api/highscore')  // replace with your actual backend API endpoint
      .then(response => {
        setHighScore(response.data.highScore);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // Check if the current score is a new high score
    if (score > highScore) {
      setHighScore(score);
      setNewHighScore(true);
      // Update the high score on the server
      axios.put('/api/highscore', { score })  // replace with your actual backend API endpoint
        .catch(err => {
          console.error(err);
        });
      if (onNewHighScore) {
        onNewHighScore(score);
      }
    }
  }, [score, highScore, onNewHighScore]);

  return (
    <div>
      <h1>Current Score: {score}</h1>
      {newHighScore && <p>You beat your high score!</p>}
    </div>
  );
};

export default Session;
