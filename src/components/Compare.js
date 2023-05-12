import codeSnippets from "../data/CodeSnippets";
import { useState, useRef, useEffect } from "react";
import Game from "./Game";

const Compare = (props) => {
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [snippet, setSnippet] = useState("");

  const handleSubmit = (e) => {
    // Function to compare user input to code snippet //
    e.preventDefault();
    const insertedText = inputRef.current.value;
    if (insertedText === snippet) {
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
      setIndex(prevIndex => prevIndex + 1);
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
      <div id="word" className="Home">
        <h2>Typing Game</h2>
        <small>Type the following:</small>
        <p>{snippet}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Type the word here..."
            ref={inputRef}
          />
          {error && <p className="error-message">Please try again</p>}
         
        </form>
      </div>
    </div>
  );
};

export default Compare;
