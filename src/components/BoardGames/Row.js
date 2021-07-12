import React, { useContext, useEffect } from "react";
import { BoardSizeContext } from "../../context/BoardSizeContext";
import Square from "./Square";

const Row = ({ column }) => {
  const [size] = useContext(BoardSizeContext);

  useEffect(() => {
    return;
  }, [size]);

  return (
    <div>
      {size.row.map((value, index) => {
        return <Square key={index} row={index} column={column} />;
      })}
    </div>
  );
};

export default Row;
