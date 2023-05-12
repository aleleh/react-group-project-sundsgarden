import codeSnippets from "../data/CodeSnippets";
import { useState, useRef, useEffect } from "react";
import Game from "./Game";


const Compare = (props) => {

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

        useEffect(() => {
            if (props.gameStarted) {

            // This function needs to be written outside of the use effect hook to work properly and compare the input to the code //
        
            const insertedText = inputRef.current.value;
            if (insertedText === snippet) {
            nextSnippet();
            inputRef.current.value = '';
            } else {
            setError(true);
            setButton('Try Again');
            nextSnippet();
        }
        }
     }, [props.gameStarted]);

    



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
            {/* <button onClick={btnClicked}>{button}</button> */}
            </div>
            
        </div>
    );
};

export default Compare;