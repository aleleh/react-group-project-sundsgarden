import { useState } from "react";

const TextInput = () => {
    // variable to store input
    const [input, setinput] = useState("");

    // function to set input
    const handleInput = (e) => {
        setinput(e.target.value);
    };


    return (
        <div>
            <div>
                <label>Write here</label>
                <input type="text" name="input" value={input} onChange={handleInput}/>
            </div>
            <h5>{input}</h5>
        </div>
    );
};

export default TextInput;