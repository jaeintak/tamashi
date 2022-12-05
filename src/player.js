import React from "react";

class Player extends React.Component {
  render() {
    return (
      <circle
        className={`${
          (position[2] === ctx.currentPlayer && !ctx.winner) || isPossible
            ? "pointer"
            : ""
        }`}
        onClick={this.handleClick}
        cx={`calc(16 + ${x * scale})`}
        cy={`calc(18 + ${y * Math.sqrt(3) * scale})`}
        r={`${0.8 * scale}`}
        fill={this.getFillColor()}
        stroke={activeZi && isPossible ? "gray" : ""}
        strokeWidth=".1"
        strokeDasharray=".3"
      />
    );
  }
}

export default Player;
