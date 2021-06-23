import React, { useState, createContext } from "react";

export const CenterContext = createContext();

export const CenterContextProvider = ({ children }) => {
  const [centre, setCentre] = useState({
    row: null,
    column: null,
  });

  return (
    <CenterContext.Provider value={[centre, setCentre]}>
      {children}
    </CenterContext.Provider>
  );
};
