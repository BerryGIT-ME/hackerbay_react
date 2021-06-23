import React, { useContext, useEffect } from "react";
import { BoardSizeContext } from "../context/BoardSizeContext";
import Row from "./Row";

const Column = () => {
  const [size] = useContext(BoardSizeContext);

  useEffect(() => {
    return;
  }, [size]);

  return (
    <div>
      <br></br>
      {size.column.map((value, index) => {
        return <Row key={index} column={index} />;
      })}
    </div>
  );
};

export default Column;
