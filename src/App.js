import BoardSize from "./components/BoardSize";
import { BoardSizeProvider } from "./context/BoardSizeContext";
import { GreenSpriteProvider } from "./context/GreenSpriteContext";
import { CenterContextProvider } from "./context/CenterContext";
import { GreenSpriteNoContextProvider } from "./context/GreenSpriteNoContext";
import { CountContextProvider } from "./context/CountContext";
import { useState } from "react";
import Column from "./components/Column";
import Navbar from "./components/Navbar";
import "./app.css";

function App() {
  const [play, setplay] = useState({
    play: false,
    reactBoardGame: false,
  });

  const handleStartGameClick = (str = "") => {
    switch (str) {
      case "Simple React Board Game":
        setplay({ ...play, play: true, reactBoardGame: true });
        break;
      default:
        setplay({ ...play, play: false, reactBoardGame: false });
    }
  };
  return (
    <div>
      <Navbar />
      <br></br>
      <div className="container">
        {!play.play && (
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <img
                  src="https://images.unsplash.com/photo-1559480423-a4c7efb6946a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxib2FyZCUyMGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Simple React Board Game</h5>
                  <p className="card-text">
                    Instructions: Click the start game button and define the
                    size of the game board. Typical values are - height: 10 and
                    width: 10
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      handleStartGameClick("Simple React Board Game")
                    }
                    className="btn btn-primary"
                  >
                    Start Game
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {play.reactBoardGame && (
          <div>
            <h4>
              Click the red button and move around with the direction keys
              (arrow keys on the keyboard) until all the green buttons are
              cleared
            </h4>
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
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
