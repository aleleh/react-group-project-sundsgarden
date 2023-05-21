import codeSnippets from "../data/CodeSnippets";
import { useState, useRef, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Compare = (props) => {
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [snippet, setSnippet] = useState("");
  
  // If game starts and inputRef is defined, autofocus on input 
  useEffect(() => {
    if (props.gameStarted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.gameStarted]);

  const handleSubmit = (e) => {
    // Function to compare user input to code snippet //
    e.preventDefault();
    const insertedText = inputRef.current.value;
    if (insertedText === snippet.code) {
      nextSnippet();
      // Clears input field //
      inputRef.current.value = "";
    } else {
      // Display error message //
      setError(true);
    }
  };

  const nextSnippet = () => {
    setError(false);

    inputRef.current.value = "";
    if (index < codeSnippets.length - 1) {
      // using prevState to update the state as it wasn't working properly before and not updating correctly.  This enables the state to be updated and sets the state correctly.
      setIndex((prevIndex) => prevIndex + 1);
      setSnippet(codeSnippets[index + 1]);
    } else {
      setSnippet("No more snippets");
    }
  };

  useEffect(() => {
    //Passes gameStarted as a prop from game component, if true sets displays first snippet in codeSnippets array //
    if (props.gameStarted) {
      setSnippet(codeSnippets[0]);
    }
  }, [props.gameStarted]);

  return (
    <div>
      <div id="word" className="codeinput-container">
        <small>Type the following:</small>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {snippet.code}
        </SyntaxHighlighter>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Type the word here..."
            ref={inputRef}
            // Takes previous value and adds 1 to "charactersTyped" 
            // every time a key is pressed if it is not enter, space, shift, backspace or delete
            onKeyDown={(e) => {
              if (
                e.key !== 'Enter' &&
                e.key !== ' ' &&
                e.key !== 'Shift' &&
                e.key !== 'Backspace' &&
                e.key !== 'Delete'
              ) {
              props.setCharactersTyped((prevValue) => prevValue + 1);
              }
            }}
            disabled={props.timeUp}
          />
        </form>
        <div className="error-message">
          {error && <p className="error-message">Please try again</p>}
        </div>
      </div>
    </div>
  );
};

export default Compare;
