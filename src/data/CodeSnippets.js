const codeSnippets = [
  {
    language: "javascript",
    code: `import { useState } from "react";
  
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
  },
  {
    language: "javascript",
    code: `const Array = () => {
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
  
  export default Array;`,
  },
  {
    language: "javascript",
    code: 'const variable = "hello";',
  },
  {
    language: "javascript",
    code: "let number = 45;",
  },
  {
    language: "javascript",
    code: "function Name() {};",
  },
  {
    language: "javascript",
    code: "const handleClick = () => {",
  },
  {
    language: "javascript",
    code: "useEffect(() => {;",
  },
  {
    language: "javascript",
    code: "const newTodo = { text: e.target.todo.value };;",
  },
  {
    language: "javascript",
    code: "e.preventDefault();",
  },
  {
    language: "javascript",
    code: "const handleSubmit = (e) => {",
  },
  {
    language: "javascript",
    code: "{isVisible && <div>Visible Component</div>}",
  },
  {
    language: "javascript",
    code: ".then((response) => response.json());",
  },
  {
    language: "javascript",
    code: "const [isOpen, setIsOpen] = useState(false);",
  },
];

export default codeSnippets;


 


  