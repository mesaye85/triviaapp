import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HighScore = () => {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/highscores') // replace with your actual backend API endpoint
      .then(response => {
        setScores(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch high scores.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>High Scores</h1>
      {scores.length === 0 ? (
        <p>No high scores yet.</p>
      ) : (
        <ul>
          {scores.map((score, index) => (
            <li key={index}>{score.username}: {score.points}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HighScore;
