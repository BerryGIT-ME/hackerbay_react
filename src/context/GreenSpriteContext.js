import React, { useState, createContext } from "react";

export const GreenSpriteContext = createContext();

export const GreenSpriteProvider = ({ children }) => {
  const [sprites, setSprites] = useState({
    row: [],
    column: [],
  });

  return (
    <GreenSpriteContext.Provider value={[sprites, setSprites]}>
      {children}
    </GreenSpriteContext.Provider>
  );
};
