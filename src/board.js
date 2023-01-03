import React from "react";
import PropTypes from "prop-types";
import "./board.css";

class Board extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool
  };

  onClick = (id) => {
    if (this.isPossible(id)) {
      this.props.moves.open();
      this.props.moves.move(id);
    }
  };

  isPossible(id) {
    if(this.props.G.playerA === this.props.G.playerB) return false;
    if (this.props.ctx.currentPlayer === "0") {
      if (
        id === this.props.G.playerA + 1 ||
        id === this.props.G.playerA + -1 ||
        id === this.props.G.playerA + 10 ||
        id === this.props.G.playerA + -10
      )
        return true;
      else return false;
    } else if (
      id === this.props.G.playerB + 1 ||
      id === this.props.G.playerB + -1 ||
      id === this.props.G.playerB + 10 ||
      id === this.props.G.playerB + -10
    )
      return true;
    else return false;
  }

  render() {
    let tbody = [];
    for (let i = 0; i < 10; i++) {
      let cells = [];
      for (let j = 0; j < 10; j++) {
        const id = 10 * i + j;
        const playerA = this.props.G.playerA;
        const playerB = this.props.G.playerB;
        
        cells.push(
          <td
            id="cell"
            key={id}
            className={[
              this.isPossible(id) && "possible",
              id === playerA && "circleA",
              id === playerB && "circleB"
            ].filter(e => !!e).join(' ')}
            onClick={() => this.onClick(id)}
          >{this.props.G.openCells[id] == true && this.props.G.cells[id]}</td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
