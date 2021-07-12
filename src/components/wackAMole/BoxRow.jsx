import React from "react";
import Box from "./Box";

function BoxRow({ col, rowIndex, selected, handleClick }) {
  return (
    <>
      {col.map((col, index) => (
        <Box
          key={index}
          colIndex={index}
          rowIndex={rowIndex}
          selected={selected}
          handleClick={handleClick}
        />
      ))}
    </>
  );
}

export default BoxRow;
