import React from 'react';

function TimeUpPopup({ PlayAgain, Quit, charactersTyped }) {
  return (
    <div className="time-up-backdrop">
      <div className="time-up-popup">
        <h2>Time is up!</h2>
        <p>You typed {charactersTyped} characters </p>
        <button onClick={PlayAgain}>Play again</button>
        <button onClick={Quit}>Quit</button>
      </div>
    </div>
  );
}

export default TimeUpPopup;