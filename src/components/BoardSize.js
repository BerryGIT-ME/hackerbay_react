import React, { useContext } from "react";
import { BoardSizeContext } from "../context/BoardSizeContext";

const BoardSize = () => {
  const [size, setSize] = useContext(BoardSizeContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log();

    if (
      Number.isInteger(parseInt(document.getElementById("row").value)) &&
      Number.isInteger(parseInt(document.getElementById("column").value))
    ) {
      let _size = { ...size };
      _size.row = parseInt(document.getElementById("row").value);
      _size.column = parseInt(document.getElementById("column").value);
      setSize(_size);
      return;
    } else {
      alert("make sure the row/column are numbers");
      return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="row">Number of rows:</label>
        <br></br>
        <input type="text" id="row" name="row" />
        <br></br>
        <label htmlFor="column">Number of columns:</label>
        <br></br>
        <input type="text" id="column" name="column" />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};

export default BoardSize;
