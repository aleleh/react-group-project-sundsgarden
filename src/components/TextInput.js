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
                <input type="text" name="input" value={input} onChange={handleInput} placeholder="Write here" autoFocus/>
            </div>
            <h5>{input}</h5>
        </div>
    );
};

export default TextInput;