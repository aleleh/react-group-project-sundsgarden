import { useState, useEffect } from "react";
import Game from "./Game";
import DisplayCode from "./DisplayCode";

function Timer(props) {
  // A state variable with seconds holding the current state and set to 60 from start. setSeconds will be used to update the state//
  const [seconds, setSeconds] = useState(60);
  const [codeDisplay, setCodeDisplay] = useState(false);

  useEffect(() => {
    let interval;
    // Passes gameStarted as a prop from game.js, if true run function//
    if (props.gameStarted) {
      interval = setInterval(() => {
        // -1 from the current value of seconds and update the state variable using setSeconds//
        setSeconds((seconds) => seconds - 1);
        // Sets 1000ms delay to the setInterval function, reducing the counter by 1 every second //
      }, 1000);
    }

    return () => clearInterval(interval);
    // Clears the interval when the effect is finished//
    // Tracks changed to gameStarted //
  }, [props.gameStarted]);

  useEffect(() => {
    if (seconds === 60) {
      setCodeDisplay(true);
    }
  }, [seconds]);

  return (
    // Displays countdown //
    <div>
      {seconds > 0 && <p>Countdown: {seconds}</p>}
      {seconds <= 0 && <p>Countdown ended!</p>}
      
    </div>
  );
}

export default Timer;
