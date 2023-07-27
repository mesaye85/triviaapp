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
  const [showGame, setShowGame] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const handlePlayGame = () => {
    if (isLoggedIn) {
      setShowGame(true);
    } else {
      setShowCategory(true);
    }
  };

  const handleLoginClick = () => {
    setIsLoggingIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowGame(false);
    setShowCategory(false);
  };

  const handleRegistration = () => {
    setIsRegistering(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setShowCategory(true);
    }
  }, [isLoggedIn]);

  return (
    <div className="app-container">
      {!showGame && !isLoggingIn && !isRegistering && !showCategory && <TypingBanner />}
      <div className="buttons-container">
        {!showGame && !showCategory && (
          <div>
            <h1>Welcome to Trivia Game</h1>
            <button className="nolog-button" onClick={handlePlayGame}>
              Play Game
            </button>
            {!isLoggingIn && !isRegistering && (
              <button className="log-button" onClick={handleLoginClick}>
                LOGIN
              </button>
            )}
            {!isLoggingIn && !isRegistering && (
              <button className="log-button" onClick={handleRegistration}>
                REGISTER
              </button>
            )}
          </div>
        )}
        {isLoggingIn && <Login setIsLoggingIn={setIsLoggingIn} />}
        {isRegistering && <Registration />}
        {showCategory && <Category />}
        {showGame && <GameOver />}
        {showGame && <QuestionProcessor />}
        {showGame && <Session />}
      </div>
      <Footer />
    </div>
  );
}

export default GameFace;
