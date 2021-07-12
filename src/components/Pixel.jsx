import React from "react";

function Pixel({ colIndex, rowIndex, selected }) {
  rowIndex === selected[0] &&
    colIndex === selected[1] &&
    console.log(rowIndex, colIndex);
  return (
    <div
      id={`row:${rowIndex}col:${colIndex}`}
      className={`pixel ${
        rowIndex === selected[0] && colIndex === selected[1] ? "red" : ""
      }`}
    ></div>
  );
}

export default Pixel;
