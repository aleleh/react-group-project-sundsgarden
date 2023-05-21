import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TimeUpPopup from "./TimeUpPopup";
import Timer from "./Timer";
import Compare from "./Compare";

const Game = () => {
  // Create ref instance to manage input element focus
  const inputRef = useRef(null);

  // Manage if the game has started
  const [gameStarted, setGameStarted] = useState(false);
  // Manage the countdown before the game starts
  const [countdown, setCountdown] = useState(0);

  const [timeUp, setTimeUp] = useState(false);

  const navigate = useNavigate();

  const [charactersTyped, setCharactersTyped] = useState(0);

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
    // Added interval to sync countdown with start game
    setTimeout(() => {
      setGameStarted(true);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 5000);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
  };

  // Function to handle play again
  const playAgain = () => {
    setTimeUp(false);
    setGameStarted(false);
  };

  const quit = () => {
    setGameStarted(false);
    setTimeUp(false);
    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="game-container">
      <h1>GAME</h1>
      <Timer gameStarted={gameStarted} onTimeUp={handleTimeUp} />
      {!gameStarted && <button onClick={handleStartGame}>Start game</button>}
      <div className="starting-in">
        {countdown > 0 && <h2>Starting in {countdown}</h2>}
      </div>
      <Compare
        gameStarted={gameStarted}
        inputRef={inputRef}
        timeUp={timeUp}
        setCharactersTyped={setCharactersTyped}
      />
      {timeUp && (
        <TimeUpPopup
          PlayAgain={playAgain}
          Quit={quit}
          charactersTyped={charactersTyped}
        />
      )}
    </div>
  );
};

export default Game;
