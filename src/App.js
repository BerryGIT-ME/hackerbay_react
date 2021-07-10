import { useState } from "react";
import * as Boardgame from "./utils/simpleReactBoardGame";
import BoardGameComponent from "./components/BoardGameComponent";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import "./app.css";

// some comment
function App() {
  const [play, setplay] = useState({
    play: false,
    simpleReactBoardGame: false,
    spaceInvader: false,
    snakeXenxia: false,
  });

  const handleStartGameClick = (str = "") => {
    switch (str) {
      case "Simple React Board Game":
        setplay({ ...play, play: true, simpleReactBoardGame: true });
        break;
      case "Space Invaders":
        setplay({ ...play, play: true, simpleReactBoardGame: true });
        break;
      case "Snake Xenxia":
        setplay({ ...play, play: true, simpleReactBoardGame: true });
        break;
      default:
    }
  };
  let gameCards = Boardgame.gameCards;

  return (
    <div>
      <Navbar />
      <br></br>
      <div className="container">
        {!play.play && (
          <div className="container">
            <div className="row">
              {gameCards.map((card, index) => (
                <Cards key={index} {...card} startGame={handleStartGameClick} />
              ))}
            </div>
          </div>
        )}
        {play.simpleReactBoardGame && <BoardGameComponent />}
      </div>

      <div className="container screen"></div>
    </div>
  );
}

export default App;
