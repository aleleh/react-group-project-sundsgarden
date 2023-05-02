import { useState } from "react";

const DisplayCode = () => {
    // Code array
    const codeSnippets = ['const variable = "hello";', 
    'let number = 45;', 
    'function Name() {};',
    'number 4'
    ];

    const [snippet, setSnippet] = useState();
    let i = 0;
    const [index, setIndex] = useState(i);

    console.log(index);

    //const addOne = codeSnippets.map((i) => i++);

    const btnClicked = (e) => {
        e.preventDefault();
        setIndex(i += 1);
        console.log(index);
        
        // setSnippet(codeSnippets[i]);
        // console.log(addOne);
        // console.log(i);
        
    };

    

    return (
        <div>
            <p>Code to copy:</p>
            <h1>{snippet}</h1>
            <button onClick={btnClicked}>click</button>
        </div>
    );
};

export default DisplayCode;