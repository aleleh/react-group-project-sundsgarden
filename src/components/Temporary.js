import { useState } from "react";

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

export default Button;