import React from "react";
import { render } from "react-dom";
import { Client } from "boardgame.io/react";
import Tamashi from "./game";
import Board from "./board";

const App = Client({
  game: Tamashi,
  board: Board
});

render(<App />, document.getElementById("root"));
