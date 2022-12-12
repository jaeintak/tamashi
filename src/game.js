function GetRandomTile() {
  const effects = [
    "aperture",
    "shaking chair",
    "portal gun",
    "soul drops found"
  ];
  return effects[Math.floor(Math.random() * effects.length)];
}

function TakeEffect(G, ctx) {
  if (ctx.currentPlayer === "0") {
    if (G.currentTile === "aperture") {
    }
    if (G.currentTile === "shaking chair") {
      G.playerASoulDrops--;
    }
    if (G.currentTile === "portal gun") {
      G.playerA++;
    }
    if (G.currentTile === "soul drops found") {
      G.playerASoulDrops++;
    }
  } else {
    if (G.currentTile === "shaking chair") {
      G.playerBSoulDrops--;
    }
    if (G.currentTile === "soul drops found") {
      G.playerBSoulDrops++;
    }
  }
}

const Tamashi = {
  setup: () => ({
    playerA: 0,
    playerASoulDrops: 10,
    playerB: 99,
    playerBSoulDrops: 10,
    cells: Array(100).fill(null),
    currentTile: ""
  }),

  moves: {
    open(G, ctx) {
      G.currentTile = GetRandomTile();
      if (ctx.currentPlayer === "0") {
        G.cells[G.playerB] = G.currentTile;
      } else {
        G.cells[G.playerA] = G.currentTile;
      }
      TakeEffect(G, ctx);
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
