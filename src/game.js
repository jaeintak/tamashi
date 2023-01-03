import Board from "./board";
let BgReact = require("boardgame.io/react");

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
    console.log("A takes effect")
    if (G.cells[G.playerA] === "aperture") {
    }
    if (G.cells[G.playerA] === "shaking chair") {
      G.playerASoulDrops--;
      console.log("shaking chair")
      console.log(G.playerASoulDrops)
    }
    if (G.cells[G.playerA] === "portal gun") {
      console.log("portal gun")
      console.log(G.playerA)
      G.playerA++;
      console.log("portal gun")
      console.log(G.playerA)
    }
    if (G.cells[G.playerA] === "soul drops found") {
      G.playerASoulDrops++;
      console.log("soul drops found")
      console.log(G.playerASoulDrops)
    }
  } else {
    console.log("B takes effect")
    if (G.cells[G.playerB] === "aperture") {
    }
    if (G.cells[G.playerB] === "shaking chair") {
      G.playerBSoulDrops--;
      console.log("shaking chair")
      console.log(G.playerBSoulDrops)
    }
    if (G.cells[G.playerB] === "portal gun") {
      G.playerB++;
      console.log("portal gun")
      console.log(G.playerB)
    }
    if (G.cells[G.playerB] === "soul drops found") {
      G.playerBSoulDrops++;
      console.log("soul drops found")
      console.log(G.playerBSoulDrops)
    }
  }
}

// function OpenTile(G, ctx) {
//   if (ctx.currentPlayer == "0") {
//     G.openCells[G.playerA] = true;
//   } else {
//     G.openCells[G.playerB] = true;
//   }
// }

const createGame = (numberOfPlayers) => {
  return {
    setup: () => ({
      playerA: 0,
      playerASoulDrops: 10,
      playerB: 99,
      playerBSoulDrops: 10,
      cells: Array.apply(null, Array(100)).map(GetRandomTile),
      openCells: Array(100).fill(false)
    }),

    moves: {
      open(props) {
        if (props.ctx.currentPlayer == "0") {
          props.G.openCells[props.G.playerA] = true;
        } else {
          props.G.openCells[props.G.playerB] = true;
        }
        TakeEffect(props.G, props.ctx);
      },

      move(props, id) {
        if (props.ctx.currentPlayer === "0") {
          props.G.playerA = id;
        } else {
          props.G.playerB = id;
        }
      }
    },

    turn: {
      moveLimit: 2
    },
  };
};

const createClient = (players) => {
  return BgReact.Client({
    game: createGame(players),
    numPlayers: players,
    board: Board,
    debug: false
  });
};

export default createClient;
