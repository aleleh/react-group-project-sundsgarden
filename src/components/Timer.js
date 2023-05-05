import { useState, useEffect } from "react";
import Game from "./Game";

function Timer(props) {
    // A state variable with seconds holding the current state and set to 60 from start. setSeconds will be used to update the state//
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        let interval;
        // Passes gameStarted as a prop from game.js, if true run function//
        if (props.gameStarted) {

         interval = setInterval(() => {
            // -1 from the current value of seconds and update the state variable using setSeconds//
          setSeconds(seconds => seconds - 1);
          // Sets 1000ms delay to the setInterval function, reducing the counter by 1 every second //
        }, 1000);
        };

    return () => clearInterval(interval);
    // Clears the interval when the effect is finished//
    // The empty array ensures that the timer only runs once when it is rendered//
    }, [props.gameStarted]);

return (
    // Displays countdown //
    <div>
        {seconds > 0 && <p>Countdown: {seconds}</p>}
        {seconds <= 0 && <p>Countdown ended!</p>}
    </div>
    );
};

export default Timer;