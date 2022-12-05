/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

const effects = ["aperture", "shaking chair"];

const Tamashi = {
  setup: () => ({
    playerA: 0,
    playerB: 99,
    cells: Array(100).fill(null)
  }),

  moves: {
    open(G, ctx) {
      if (ctx.currentPlayer === "0") {
        G.cells[G.playerB] = "open";
      } else {
        G.cells[G.playerA] = "open";
      }
    },

    move(G, ctx, id) {
      if (ctx.currentPlayer === "0") {
        G.playerA = id;
      } else {
        G.playerB = id;
      }
    }
  },

  turn: { moveLimit: 2 }
};

export default Tamashi;
