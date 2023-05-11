import codeSnippets from "../data/CodeSnippets";
import { useState, useRef } from "react";


const Compare = () => {

    const [error, setError] = useState(false);
    const [button, setButton] = useState('check');
    const inputRef = useRef(null);
    
    const [index, setIndex] = useState(0);
        const [snippet, setSnippet] = useState("");
        
        const nextSnippet = () => {
            setError(false);
            setButton('Next');
            
            if (index < codeSnippets.length) {
                setIndex(index + 1);
                setSnippet(codeSnippets[index]);
            } else {
                setSnippet("No more snippets");
            }
        };

        const btnClicked = (e) => {
            e.preventDefault();
            const insertedText = inputRef.current.value;
    
            if (insertedText === snippet) {
            nextSnippet();
            inputRef.current.value = '';
            } else {
            setError(true);
            setButton('Try Again');
        }
        };

    



    return (
        <div>
            <div id="word" className="Home">
            <h2>Typing Game</h2>
            <small>Type the following:</small>
            <p>{snippet}</p>
            

            <input
            type="text"
            autoComplete="off"
            placeholder="Type the word here..."
            ref={inputRef}
            />
            {error && <p className="error-message">Please try again</p>}
            <button onClick={btnClicked}>{button}</button>
            </div>
            <button onClick={btnClicked}>click for code</button>
        </div>
    );
};

export default Compare;