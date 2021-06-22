import React, { useContext } from "react";
import { array } from "yargs";
import { BoardSizeContext } from "../context/BoardSizeContext";
import Square from "./Square";

const Row = () => {
  const [size, setSize] = useContext(BoardSizeContext);

  let list = new Array(size.row);
  return (
    <div>
      {list.map(() => {
        <Square />;
      })}
    </div>
  );
};

export default Row;
