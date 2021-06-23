import { useContext, useEffect } from "react";
import { BoardSizeContext } from "../context/BoardSizeContext";

const BoardSize = () => {
  const [size, setSize] = useContext(BoardSizeContext);
  useEffect(() => {
    let row_val = parseInt(prompt("board height"));
    let column_val = parseInt(prompt("board width"));

    if (Number.isInteger(row_val) && Number.isInteger(column_val)) {
      let row = new Array(row_val);
      let column = new Array(column_val);
      //
      for (let i = 0; i < row_val; i++) {
        row[i] = i;
      }
      for (let i = 0; i < column_val; i++) {
        column[i] = i;
      }
      let _size = { ...size };
      _size = {
        row: row,
        column: column,
      };

      setSize(_size);
    } else {
      alert("Invalid inputs");
    }

    return () => {};
  }, []);
  return null;
};

export default BoardSize;
