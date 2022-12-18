import React, { useState } from "react";
import createClient from "./game";
import Setup from "./setup";

export default function App() {
  const [player, setplayer] = useState(0);

  const handleSelection = (player) => {
    setplayer(player);
  };

  let Game;
  if (player) {
    Game = createClient(player);
  }

  return (
    <div>{Game ? <Game /> : <Setup handleSelection={handleSelection} />}</div>
  );
}
