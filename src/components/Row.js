import React, { useContext } from "react";
import { BoardSizeContext } from "../context/BoardSizeContext";
import Square from "./Square";

const Row = () => {
    const [size, setSize] = useContext(BoardSizeContext);
  return <div>
      {
          for (let i = 0; i < size.row; i++) {
              
          }
      }
  </div>;
};

export default Row;
