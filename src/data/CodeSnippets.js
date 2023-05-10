const codeSnippets = [   
    `import { useState } from "react";
    
    const Button = () => {
        const [message, setMessage] = useState("");
    
        function btnPressed() {
            setMessage("Hello World!")
        };
    
        return (
            <div>
                <button type="button" onClick={btnPressed}>Click me!</button>
                <h1>{message}</h1>
            </div>
        );
    };
    
    export default Button;`,

    `const Array = () => {
        const trees = [
            "Birch",
            "Oak",
            "Maple",
            "Pine"
        ];
    
        const listItems = trees.map((item) => 
            <li>{item}</li>
        );
    
        return (
            <div>
                <h1>Trees</h1>
                <ul>{listItems}</ul>
            </div>
        );
    };
    
    export default Array;`
];

export default codeSnippets;
