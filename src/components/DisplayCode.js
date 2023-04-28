import {Where} from "react";

const DisplayCode = () => {
    // Code array
    const codeSnippets = ['const variable = "hello";', 
    'let number = 45;', 
    'function Name() {};'
    ];

    
    

    return (
        <div>
            <p>Code to copy:</p>
            <h2>{codeSnippets}</h2>
        </div>
    );
};

export default DisplayCode;