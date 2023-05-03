import React from 'react';

function TimeUpPopup({ PlayAgain, Quit }) {
  return (
    <div className="time-up-popup">
      <h2>Time is up!</h2>
      <button onClick={PlayAgain}>Play again</button>
      <button onClick={Quit}>Quit</button>
    </div>
  );
}

// We can manage the popup visibility by using a state variable, something like isTimeUp 
// When the 60-second timer is up, we set the isTimeUp state to true to show the popup

// PlayAgain or Quit function should be declared in Game.js 

export default TimeUpPopup;