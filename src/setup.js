import React from "react";
import "./setup.css";

export default function Setup({ handleSelection }) {
  return (
    <div className="container">
      <div className="title">Abducted</div>
      <p>How many players?</p>
      <button className="player-btn" onClick={() => handleSelection(1)}>
        1
      </button>
      <button className="player-btn" onClick={() => handleSelection(2)}>
        2
      </button>
      <button className="player-btn" onClick={() => handleSelection(3)}>
        3
      </button>
      <button className="player-btn" onClick={() => handleSelection(4)}>
        4
      </button>
    </div>
  );
}
