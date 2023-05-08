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

function MyComponents() {
    const [randomWord, setRandomWord] = useState(getRandomWord());
    const inputRef = useRef(null);
    const endgameEl = useRef(null);

    function addWordToDOM() {
        const newRandomWord = getRandomWord();
        setRandomWord(newRandomWord);
    }

    function handleInputChange(event) {
        const insertedText = event.target.value;
        console.log(insertedText);

        if (insertedText === randomWord) {
            addWordToDOM();
            event.target.value = '';
        }
    }

    return (
        <div>
            <div ref={endgameEl}></div>
            <p>{randomWord}</p>
            <input type="text" ref={inputRef} onChange={handleInputChange} />
        </div>
    );
}

export default MyComponents;
