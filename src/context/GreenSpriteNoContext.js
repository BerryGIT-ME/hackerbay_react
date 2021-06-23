import React, { useState, createContext } from "react";

export const GreenSpriteNoContext = createContext();

export const GreenSpriteNoContextProvider = ({ children }) => {
  const [spriteNo, setSpriteNo] = useState(0);

  return (
    <GreenSpriteNoContext.Provider value={[spriteNo, setSpriteNo]}>
      {children}
    </GreenSpriteNoContext.Provider>
  );
};
