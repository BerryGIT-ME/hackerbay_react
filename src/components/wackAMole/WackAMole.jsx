import { useState } from "react";
import Interval from "../Interval";
import BoxRow from "./BoxRow";

function WackAMole() {
  // screen size in pixels, gotten from the css class screen and pixel
  const screen = 400;
  const pix = 40;
  const arraySize = screen / pix;
  const row = new Array(arraySize).fill(0);
  const col = new Array(arraySize).fill(0);
  const [wackAmole, setwackAmole] = useState({
    count: 0,
    hits: 0,
    start: false,
    displayResults: false,
    time: 60,
  });
  const { count, time, displayResults } = wackAmole;
  let hits = wackAmole.hits;
  const updateState = () => {
    if (time === 0) {
      alert("Game Over");
      setwackAmole({ ...wackAmole, start: false, displayResults: true });
      return;
    }
    if (wackAmole.hits === hits) hits = hits - 1;
    setwackAmole({
      ...wackAmole,
      count: count + 1,
      hits: hits,
      time: time - 1,
    });
  };

  const randomPixel = () => {
    // There are 20 divs per column
    const rowNo = 10;
    const colNo = 10;
    let tempRow = Math.floor(Math.random() * rowNo);
    let tempCol = Math.floor(Math.random() * colNo);
    return [tempRow, tempCol];
  };
  const hitsClick = (col, row, selected) => {
    if (row === selected[0] && col === selected[1]) hits = hits + 1;
    else hits = hits - 1;
  };
  let randomPosition = randomPixel();
  const start = () => {
    setwackAmole({
      ...wackAmole,
      start: true,
      time: 60,
      hits: 0,
      displayResults: false,
    });
  };
  return (
    <>
      {wackAmole.start ? (
        <Interval state={wackAmole} updateCount={updateState} />
      ) : (
        <button type="button" onClick={() => start()}>
          Start
        </button>
      )}
      <h3>
        Click on the mole as many times as possible to increase your hits. Any
        miss will be deducted from your total hits
      </h3>
      <div className={`${time > 30 ? "OK" : time > 10 ? "hazard" : "danger"}`}>
        <h4>Time: {wackAmole.time}</h4>
      </div>
      <div className="screen">
        {row.map((cell, index) => (
          <BoxRow
            key={index}
            col={col}
            rowIndex={index}
            selected={randomPosition}
            handleClick={hitsClick}
          />
        ))}
      </div>
      <div
        className={`${
          wackAmole.hits > 30 ? "OK" : wackAmole.hits > 10 ? "hazard" : "danger"
        }`}
      >
        <h4>Hits: {wackAmole.hits}</h4>
      </div>
      {!displayResults
        ? null
        : wackAmole.hits > 30
        ? "Very Good keep it up"
        : "keep on practicing, You will get there"}
    </>
  );
}

export default WackAMole;
