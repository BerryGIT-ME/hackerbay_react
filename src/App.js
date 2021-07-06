import BoardSize from "./components/BoardSize";
import { BoardSizeProvider } from "./context/BoardSizeContext";
import { GreenSpriteProvider } from "./context/GreenSpriteContext";
import { CenterContextProvider } from "./context/CenterContext";
import { GreenSpriteNoContextProvider } from "./context/GreenSpriteNoContext";
import { CountContextProvider } from "./context/CountContext";
import { useState } from "react";
import Column from "./components/Column";
import "./app.css";

function App() {
  const [play, setplay] = useState(false);

  const handleStartGameClick = () => {
    setplay(true);
  };
  return (
    <div className="container">
      {!play && (
        <h4>
          Instructions: Click the start game button and define the size of the
          game board. Typical values are - height: 10 and width: 10
        </h4>
      )}
      {play && (
        <h4>
          Click the red button and move around with the direction keys (arrow
          keys on the keyboard) until all the green buttons are cleared
        </h4>
      )}

      <button
        type="button"
        style={{ margin: 20 }}
        onClick={() => handleStartGameClick()}
      >
        Start game
      </button>
      {play && (
        <BoardSizeProvider>
          <GreenSpriteProvider>
            <CenterContextProvider>
              <GreenSpriteNoContextProvider>
                <CountContextProvider>
                  <BoardSize />
                  <Column />
                </CountContextProvider>
              </GreenSpriteNoContextProvider>
            </CenterContextProvider>
          </GreenSpriteProvider>
        </BoardSizeProvider>
      )}
    </div>
  );
}

export default App;
