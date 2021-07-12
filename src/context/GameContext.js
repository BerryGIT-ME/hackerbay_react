import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [Game, setGame] = useState({
    simpleReactBoardGame: {
      intro: "getting it",
      center: {
        row: null,
        col: null,
      },
      sprites: null,
      size: {
        row: [],
        col: [],
      },
    },
    SnakeXenxia: null,
    spaceInvaders: null,
  });

  return (
    <GameContext.Provider value={[Game, setGame]}>
      {children}
    </GameContext.Provider>
  );
};
