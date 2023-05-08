import Header from './Header';
import React, { useState, useRef } from 'react';

const word = document.getElementById("word");
const text = document.getElementById("text");

const words = [
    "dog",
    "admit",
    "juice",
    "great",
    "fun",
    "cat",
    "drag",
    "north",
];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

const Game = () => {
  const [randomWord, setRandomWord] = useState(getRandomWord());
  const [error, setError] = useState(false);
  const [buttonText, setButtonText] = useState('check');
  const inputRef = useRef(null);
  const endgameEl = useRef(null);

  function addWordToDOM() {
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
    setError(false);
    setButtonText('Next');
  }

  function handleButtonClick() {
    const insertedText = inputRef.current.value;

    if (insertedText === randomWord) {
      addWordToDOM();
      inputRef.current.value = '';
    } else {
      setError(true);
      setButtonText('Try Again');
    }
  }

  return (
    <>
      <Header />
      <div ref={endgameEl} className="Home">
        <h2>Typing Game</h2>
        <small>Type the following:</small>
        <p>{randomWord}</p>

        <input
          type="text"
          id="text"
          autoComplete="off"
          placeholder="Type the word here..."
          ref={inputRef}
        />
        {error && <p className="error-message">Please try again</p>}
        <button onClick={handleButtonClick}>{buttonText}</button>
      </div>
    </>
  );
};

export default Game;
