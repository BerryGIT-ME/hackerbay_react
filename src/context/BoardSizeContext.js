import React, { useState, createContext } from "react";

export const BoardSizeContext = createContext();

export const BoardSizeProvider = (props) => {
  const [size, setSize] = useState({
    row: 0,
    column: 0,
  });
  return (
    <BoardSizeContext.Provider value={[size, setSize]}>
      {props.children}
    </BoardSizeContext.Provider>
  );
};
