/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from "react";
import PropTypes from "prop-types";
import Player from "./player.js";
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

  onClick = (id, opponentId) => {
    this.props.moves.move(id);
    this.props.moves.open(opponentId);
  };

  render() {
    let tbody = [];
    for (let i = 0; i < 10; i++) {
      let cells = [];
      for (let j = 0; j < 10; j++) {
        const id = 10 * i + j;
        const playerA = this.props.G.playerA;
        const playerB = this.props.G.playerB;
        const effect = "effect";
        if (id === playerA) {
          cells.push(
            <td id="cell" key={id} onClick={() => this.onClick(id, playerB)}>
              {this.props.G.cells[id]}
              <span class="circleA"></span>
            </td>
          );
        } else if (id === playerB) {
          cells.push(
            <td id="cell" key={id} onClick={() => this.onClick(id, playerA)}>
              {this.props.G.cells[id]}
              <span class="circleB"></span>
            </td>
          );
        } else {
          cells.push(
            <td id="cell" key={id} onClick={() => this.onClick(id, null)}>
              {this.props.G.cells[id]}
            </td>
          );
        }
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
