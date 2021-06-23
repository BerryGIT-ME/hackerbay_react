import { useContext, useEffect } from "react";
import { BoardSizeContext } from "../context/BoardSizeContext";
import { GreenSpriteContext } from "../context/GreenSpriteContext";
import { CenterContext } from "../context/CenterContext";

const BoardSize = () => {
  const [size, setSize] = useContext(BoardSizeContext);
  const [sprites, setSprites] = useContext(GreenSpriteContext);
  const [centre, setCentre] = useContext(CenterContext);

  useEffect(() => {
    // Set the board size

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

      //
    } else {
      alert("Invalid inputs");
    }

    // randomly assign green sprite location
    let NoOfSprites = row_val;
    if (NoOfSprites < column_val) NoOfSprites = column_val;

    let _sprites = sprites;
    let tempRow, tempCol;
    for (let i = 0; i < NoOfSprites; i++) {
      // create a random pair of value for sprite locations
      // constrianedby the row and column values
      tempRow = Math.floor(Math.random() * row_val);
      tempCol = Math.floor(Math.random() * column_val);
      // if these random value pair have already been assigned repeat the iteration
      if (_sprites.row.includes(tempRow)) {
        // get index
        let index = _sprites.row.indexOf(tempRow);
        if (_sprites.column[index] === tempCol) {
          // duplicate pair found
          // repeat loop
          i = i - 1;
          continue;
        }
      }

      _sprites.row[i] = tempRow;
      _sprites.column[i] = tempCol;
      setSprites(_sprites);
    }

    // set centre of the sprite
    let _centre = centre;
    _centre.row = Math.floor(row_val / 2);
    _centre.column = Math.floor(column_val / 2);

    setCentre(_centre);

    // add event listener for keyboard
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        console.log("move up");
        if (centre.column > 0) {
          _centre = centre;
          _centre.column = _centre.column - 1;
          setCentre(_centre);
          setFocus(centre);
        }
      }
      if (e.key === "ArrowDown") {
        console.log("move down");
        if (centre.column < column_val - 1) {
          _centre = centre;
          _centre.column = _centre.column + 1;
          setCentre(_centre);
          setFocus(centre);
        }
      }
      if (e.key === "ArrowLeft") {
        console.log("move Left");
        if (centre.row > 0) {
          _centre = centre;
          _centre.row = _centre.row - 1;
          setCentre(_centre);
          setFocus(centre);
        }
      }
      if (e.key === "ArrowRight") {
        console.log("move Right");
        if (centre.row < row_val - 1) {
          _centre = centre;
          _centre.row = _centre.row + 1;
          setCentre(_centre);
          setFocus(centre);
        }
      }
    });

    return () => {};
  }, []);

  const addLeadingZeros = (num) => {
    return String(num).padStart(4, "0");
  };

  const setFocus = (centre) => {
    document
      .getElementById(
        `${addLeadingZeros(centre.row)}${addLeadingZeros(centre.column)}`
      )
      .focus();
  };

  return null;
};

export default BoardSize;
