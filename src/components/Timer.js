import { useState, useEffect } from "react";

function Timer(props) {
    // A state variable with seconds holding the current state and set to 60 from start. setSeconds will be used to update the state//
    const [seconds, setSeconds] = useState(3);

    useEffect(() => {
        let interval;
        // Passes gameStarted as a prop from game.js, if true run function//
        if (props.gameStarted) {

         interval = setInterval(() => {
            setSeconds(seconds => {
                if (seconds - 1 <= 0) {
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


    useEffect(() => {
        //Resets the countdown when props.Gamestarted becomes false. //
        //This is fired by the play again button click, setting gameStarted to false // 
        if (seconds === 0) {
            props.onTimeUp();
        }
    }, [seconds, props.onTimeUp]);

return (
    // Displays countdown //
    <div>
        {seconds > 0 && <p>Countdown: {seconds}</p>}
        {seconds <= 0 && <p>Countdown ended!</p>}
    </div>
    );
};

export default Timer;