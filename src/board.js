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

  onClick = (G, ctx, id) => {
    if (this.isPossible(G, ctx, id)) {
      this.props.moves.move(id);
      this.props.moves.open(id);
    }
  };

  isPossible(G, ctx, id) {
    if (ctx.currentPlayer === "0") {
      if (
        id === G.playerA + 1 ||
        id === G.playerA + -1 ||
        id === G.playerA + 10 ||
        id === G.playerA + -10
      )
        return true;
      else return false;
    } else if (
      id === G.playerB + 1 ||
      id === G.playerB + -1 ||
      id === G.playerB + 10 ||
      id === G.playerB + -10
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
        if (id === playerA) {
          cells.push(
            <td
              id="cell"
              key={id}
              onClick={() => this.onClick(this.props.G, id)}
            >
              {this.props.G.cells[id]}
              <span class="circleA"></span>
            </td>
          );
        } else if (id === playerB) {
          cells.push(
            <td
              id="cell"
              key={id}
              onClick={() => this.onClick(this.props.G, this.props.ctx, id)}
            >
              {this.props.G.cells[id]}
              <span class="circleB"></span>
            </td>
          );
        } else {
          cells.push(
            <td
              id="cell"
              className={
                this.isPossible(this.props.G, this.props.ctx, id)
                  ? "possible"
                  : ""
              }
              key={id}
              onClick={() => this.onClick(this.props.G, this.props.ctx, id)}
            >
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
