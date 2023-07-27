import React, { useState, useEffect } from "react";

import Login from "./Login";
import Footer from "./Footer";
import TypingBanner from "./TypingBanner";
import GameOver from "./GameOver";
import QuestionProcessor from "./QuestionProcessor";
import Session from "./Session";
import Registration from "./Registration";
import Category from "./Category";

function GameFace() {
  const [screen, setScreen] = useState('gameface');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [category, setCategory] = useState(null);  // New state variable for category

  const handlePlayGame = () => {
    if (isLoggedIn) {
      setScreen('game');
    } else {
      setScreen('category');
    }
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setScreen('game');
  };

  const handleLoginClick = () => {
    setScreen('login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setScreen('gameface');
  };

  const handleRegistration = () => {
    setScreen('registration');
  };

  const handleNavigate = (newScreen) => {
    setScreen(newScreen);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setScreen('category');
    }
  }, [isLoggedIn]);

  return (
    <div className="app-container">
      {screen === 'gameface' && <TypingBanner />}
      {screen === 'gameface' && (
        <div>
          <h1>Welcome to Trivia Game</h1>
          <button className="nolog-button" onClick={handlePlayGame}>
            Play Game
          </button>
          <button className="log-button" onClick={handleLoginClick}>
            LOGIN
          </button>
          <button className="log-button" onClick={handleRegistration}>
            REGISTER
          </button>
        </div>
      )}
      {screen === 'login' && <Login setIsLoggingIn={setIsLoggedIn} />}
      {screen === 'registration' && <Registration />}
      {screen === 'category' && <Category onCategorySelect={handleCategorySelect} />} 
      {screen === 'game' && <GameOver onNavigate={handleNavigate} />} 
      {screen === 'game' && <QuestionProcessor category={category} />} 
      {screen === 'game' && <Session />}
      <Footer />
    </div>
  );
}

export default GameFace;
