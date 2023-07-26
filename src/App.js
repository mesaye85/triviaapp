import React, { useState } from 'react';
import GameFace from './GameFace';
import Category from './Category';
import QuestionProcessor from './QuestionProcessor';
import GameOver from './GameOver';
import HighScore from './HighScore';

function App() {
  const [page, setPage] = useState('gameface');

  const handleNavigation = (newPage) => {
    setPage(newPage);

  }

  const renderPage = () => {
    switch (page) {
      case 'gameover':
        return <GameOver onNavigate={handleNavigation} />;
      case 'questionprocessor':
        return <QuestionProcessor onNavigate={handleNavigation} />;
      case 'category':
        return <Category onNavigate={handleNavigation} />;
      case 'highscore':
        return <HighScore onNavigate={handleNavigation} />;
      case 'gameface':
      default:
        return <GameFace onNavigate={handleNavigation} />;
    }
  };

  return renderPage();
}

export default App;
