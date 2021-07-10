import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [Game, setGame] = useState({});

  return (
    <GameContext.Provider value={[Game, setGame]}>
      {children}
    </GameContext.Provider>
  );
};
