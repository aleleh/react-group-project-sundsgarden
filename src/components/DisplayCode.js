import { useState, useEffect } from "react";
import codeSnippets from "../data/CodeSnippets";
import Game from "./Game";

const DisplayCode = ({ isGameStarted }) => {
  const [index, setIndex] = useState(0);
  const [snippet, setSnippet] = useState("");

  const nextSnippet = () => {
    // Checks if isGameStarted is true before running function // 
    if (isGameStarted) {
      if (index < codeSnippets.length) {
        setIndex(index + 1);
        setSnippet(codeSnippets[index]);
      } else {
        setSnippet("No more snippets");
      }
    }
  };

  useEffect(() => {
    // Calls 'nextSnippet' function if isGameStarted is true //
    if (isGameStarted) {
      nextSnippet();
    }
  }, [isGameStarted]);


  return (
    <div>
      <p>Code to copy:</p>
      <h1 className="snippet-box">{snippet}</h1>
    </div>
  );
};

export default DisplayCode;
