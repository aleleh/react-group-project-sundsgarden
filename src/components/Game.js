import Header from './Header';
import React, { useState, useRef } from 'react';

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
  const [buttonText, setButton] = useState('check');
  const inputRef = useRef(null);

  function addWordToDOM() {
    const newRandomWord = getRandomWord();
    setRandomWord(newRandomWord);
    setError(false);
    setButton('Next');
  }

  function ButtonClick() {
    const insertedText = inputRef.current.value;

    if (insertedText === randomWord) {
      addWordToDOM();
      inputRef.current.value = '';
    } else {
      setError(true);
      setButton('Try Again');
    }
  }

  return (
    <>
      <Header />
      <div id="word" className="Home">
        <h2>Typing Game</h2>
        <small>Type the following:</small>
        <p>{randomWord}</p>

        <input
          type="text"
          autoComplete="off"
          placeholder="Type the word here..."
          ref={inputRef}
        />
        {error && <p className="error-message">Please try again</p>}
        <button onClick={ButtonClick}>{buttonText}</button>
      </div>
    </>
  );
};

export default Game;
