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
        
        setIndex(index + 1);
        setSnippet(codeSnippets[index]);
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


// 'const variable = "hello";', 
//     'let number = 45;', 
//     'function Name() {};'


// const Box = ({code}) => {
//     return <h1>{code}</h1>;
// };


// {snippet.map((s, i) => {
//     return (
//         <Box key={i} code={s}/>
//     )
// })}