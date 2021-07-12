import React from "react";

function Box({ colIndex, rowIndex, selected, handleClick }) {
  return (
    <div
      id={`row:${rowIndex}col:${colIndex}`}
      className={`box ${
        rowIndex === selected[0] && colIndex === selected[1] ? "mole" : ""
      }`}
      onClick={() => handleClick(colIndex, rowIndex, selected)}
    ></div>
  );
}

export default Box;
