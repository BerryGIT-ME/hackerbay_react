import React, { useState } from "react";
import ColumnPixel from "../ColumnPixel";
import Interval from "../Interval";

function SnakeXenxiaComponent() {
  // screen size in pixels, gotten from the css class screen and pixel
  const screen = 400;
  const pix = 20;
  const arraySize = screen / pix;
  const row = new Array(arraySize).fill(0);
  const col = new Array(arraySize).fill(0);
  const [snakeGame, setsnakeGame] = useState({
    count: 0,
    direction: "right",
  });
  const { count } = snakeGame;
  let direction = "right";
  const updateState = () => {
    console.log("update state");
    setsnakeGame({ count: count + 1, direction: direction });
  };

  const randomPixel = () => {
    // There are 20 divs per column
    const rowNo = 20;
    const colNo = 20;
    let tempRow = Math.floor(Math.random() * rowNo);
    let tempCol = Math.floor(Math.random() * colNo);
    return [tempRow, tempCol];
  };
  let randomPosition = randomPixel();
  const moveUp = () => {
    direction = "up";
  };
  const moveDown = () => {
    direction = "down";
  };
  const moveRight = () => {
    direction = "right";
  };
  const moveLeft = () => {
    direction = "left";
  };
  return (
    <>
      <Interval state={snakeGame} updateCount={updateState} />
      <div className="screen">
        {row.map((cell, index) => (
          <ColumnPixel
            key={index}
            col={col}
            rowIndex={index}
            selected={randomPosition}
          />
        ))}
      </div>
      <div className="controls">
        <button
          style={{ position: "absolute", left: "50px" }}
          onClick={() => moveUp()}
        >
          Move up
        </button>
        <button
          style={{ position: "absolute", bottom: 0, right: "50px" }}
          onClick={() => moveDown()}
        >
          Move down
        </button>
        <button
          style={{ position: "absolute", left: 0, bottom: "60px" }}
          onClick={() => moveLeft()}
        >
          Move left
        </button>
        <button
          style={{ position: "absolute", right: 0, bottom: "60px" }}
          onClick={() => moveRight()}
        >
          Move right
        </button>
      </div>
    </>
  );
}

export default SnakeXenxiaComponent;
