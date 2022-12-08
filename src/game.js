/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

function GetRandomTile() {
  const effects = [
    "aperture",
    "shaking chair",
    "portal gun",
    "soul drops found"
  ];
  return effects[Math.floor(Math.random() * effects.length)];
}

function TakeEffect(G, ctx, currentTile) {
  if (ctx.currentPlayer === "0") {
    if (currentTile === "aperture") {
    }
    if (currentTile === "shaking chair") {
      G.playerASoulDrops--;
    }
    if (currentTile === "portal gun") {
      G.playerA++;
    }
    if (currentTile === "soul drops found") {
      G.playerASoulDrops++;
    }
  } else {
    if (currentTile === "shaking chair") {
      G.playerBSoulDrops--;
    }
    if (currentTile === "soul drops found") {
      G.playerB++;
    }
  }
}

const Tamashi = {
  setup: () => ({
    playerA: 0,
    playerASoulDrops: 10,
    playerB: 99,
    playerBSoulDrops: 10,
    cells: Array(100).fill(null)
  }),

  moves: {
    open(G, ctx) {
      let currentTile = GetRandomTile();
      if (ctx.currentPlayer === "0") {
        G.cells[G.playerB] = currentTile;
      } else {
        G.cells[G.playerA] = currentTile;
      }
      TakeEffect(G, ctx, currentTile);
    },

    move(G, ctx, id) {
      if (ctx.currentPlayer === "0") {
        if (id !== G.playerA && id !== G.playerB) {
          G.playerA = id;
        }
      } else {
        G.playerB = id;
      }
    }
  },

  turn: { moveLimit: 2 }
};

export default Tamashi;
