import React, { useState, useEffect } from 'react';
import DisplayCode from './DisplayCode';
import TextInput from './TextInput';

const Game = () => {
  // Manage if the game has started
  const [gameStarted, setGameStarted] = useState(false);
  // Manage the countdown before the game starts
  const [countdown, setCountdown] = useState(0);

  // Handle the countdown timer
  useEffect(() => {
    // Check if the countdown is greater than 0
    if (countdown > 0) {
      // Set a timer to decrease the countdown value every second
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      // Clean up the timer when the effect is done
      return () => clearTimeout(timer);
    } else if (countdown === 0 && gameStarted) {
      // When the countdown reaches 0 and the game has started, set gameStarted to true
      setGameStarted(true);
    }
  }, [countdown, gameStarted]);

  // Function to handle starting the game
  const handleStartGame = () => {
    // Set the countdown value and set gameStarted to true
    setCountdown(5);
    setGameStarted(true);
  };

  return (
    <div className="game-container">
      <h1>GAME</h1>
      <button onClick={handleStartGame}>Start game</button>
      {countdown > 0 && <h2>Starting in {countdown}</h2>}
      <DisplayCode />
      <TextInput />
    </div>
  );
};

export default Game;
