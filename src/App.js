import { useState } from "react";
import * as _Boardgame from "./utils/simpleReactBoardGame";
// import BoardGameComponent from "./components/BoardGames/BoardGameComponent";
// import SnakeXenxiaComponent from "./components/snakeXenxia/SnakeXenxiaComponent";
// import SpaceInvadersComponent from "./components/spaceInvaders/SpaceInvadersComponent";
// import WackAMole from "./components/wackAMole/WackAMole";
// import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
// import Cards from "./components/BoardGames/Cards";
import "./app.css";
import LoadShortFall from "./load-shortfall";

// some comment
function App() {
  const [play, setplay] = useState({
    play: false,
    simpleReactBoardGame: false,
    spaceInvader: false,
    snakeXenxia: false,
    wackAMole: false,
  });

  const handleStartGameClick = (str = "") => {
    switch (str) {
      case "Simple React Board Game":
        setplay({ ...play, play: true, simpleReactBoardGame: true });
        break;
      case "Space Invaders":
        setplay({ ...play, play: true, spaceInvader: true });
        break;
      case "Snake Xenxia":
        setplay({ ...play, play: true, snakeXenxia: true });
        break;
      case "Wack A Mole":
        setplay({ ...play, play: true, wackAMole: true });
        break;
      default:
    }
  };

  let gameCards = _Boardgame.gameCards;

  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        {/* <Navbar />
      <br></br> */}
        <LoadShortFall />
        {/* <div className="container">
        {!play.play && (
          <div className="container">
            <Introduction />
            <div className="row">
              {gameCards.map((card, index) => (
                <Cards key={index} {...card} startGame={handleStartGameClick} />
              ))}
            </div>
          </div>
        )}
        {play.simpleReactBoardGame && <BoardGameComponent />}
        {play.spaceInvader && <SpaceInvadersComponent />}
        {play.snakeXenxia && <SnakeXenxiaComponent />}
        {play.wackAMole && <WackAMole />}
      </div> */}
      </div>
    </div>
  );
}

export default App;
