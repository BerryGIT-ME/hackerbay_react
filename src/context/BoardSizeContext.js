import React, { useState, createContext } from "react";

export const BoardSizeContext = createContext();

export const BoardSizeProvider = ({ children }) => {
  const [size, setSize] = useState({
    row: [],
    column: [],
  });
  return (
    <BoardSizeContext.Provider value={[size, setSize]}>
      {children}
    </BoardSizeContext.Provider>
  );
};
