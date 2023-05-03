import { useState } from "react";

const DisplayCode = () => {
    
    // Code array
    const codeSnippets = ['const variable = "hello";', 
        'let number = 45;', 
        'function Name() {};'
    ];

    const [index, setIndex] = useState(0);
    const [snippet, setSnippet] = useState("");
    

    const btnClicked = (e) => {
        e.preventDefault();
        console.log("clicked");
        if (index < codeSnippets.length) {
            setIndex(index + 1);
            setSnippet(codeSnippets[index]);
        } else {
            setSnippet("No more snippets");
        }
        
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