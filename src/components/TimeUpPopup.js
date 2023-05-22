import React from 'react';

function TimeUpPopup({ PlayAgain, Quit, charactersTyped }) {
  return (
    <div className="time-up-backdrop">
      <div className="time-up-popup">
        <h2 className="game-over">GAME OVER!</h2>
        <p className="typed">You typed {charactersTyped} characters </p>
        <div>
          <button onClick={PlayAgain} className="btn blue">Play again</button>
          <button onClick={Quit} className="btn blue">Quit</button>
        </div>
      </div>
    </div>
  );
}

export default TimeUpPopup;