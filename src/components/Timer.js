import { useState, useEffect } from "react";

function Timer(props) {
    // A state variable with seconds holding the current state and set to 60 from start. setSeconds will be used to update the state//
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        let interval;
        // Passes gameStarted as a prop from game.js, if true run function//
        if (props.gameStarted) {
        setSeconds(10);
         interval = setInterval(() => {
            setSeconds(seconds => {
                if (seconds - 1 <= 0) {
                    props.onTimeUp();
                    return 0;
                }
                return seconds - 1;
            });
        }, 1000);
    }

    return () => clearInterval(interval);
    // Clears the interval when the effect is finished//
    // Tracks changed to gameStarted //
    }, [props.gameStarted]);

return (
    // Displays countdown //
    <div>
        {seconds > 0 && <p className="light">Countdown: {seconds}</p>}
        {seconds <= 0 && <p className="light">Countdown ended!</p>}
    </div>
    );
};

export default Timer;