import { useState } from "react";
import codeSnippets from "../data/CodeSnippets";

const DisplayCode = () => {
    

    const [index, setIndex] = useState(0);
    const [snippet, setSnippet] = useState("");
    
    const nextSnippet = () => {
        if (index < codeSnippets.length) {
            setIndex(index + 1);
            setSnippet(codeSnippets[index]);
        } else {
            setSnippet("No more snippets");
        }
    };

    const btnClicked = (e) => {
        e.preventDefault();
        nextSnippet();
    };

    

    return (
        <div>
            <p>Code to copy:</p>
            <h1>{snippet}</h1>
            <button onClick={btnClicked}>click for code</button>
        </div>
    );
};

export default DisplayCode;
