import BoardSize from "./components/BoardSize";
import { BoardSizeProvider } from "./context/BoardSizeContext";
import { GreenSpriteProvider } from "./context/GreenSpriteContext";
import { CenterContextProvider } from "./context/CenterContext";
import Column from "./components/Column";
import "./app.css";

function App() {
  return (
    <div className="container">
      <p>
        Click the red button and move around with the direction keys until all
        the green buttons are cleared
      </p>
      <BoardSizeProvider>
        <GreenSpriteProvider>
          <CenterContextProvider>
            <BoardSize />
            <Column />
          </CenterContextProvider>
        </GreenSpriteProvider>
      </BoardSizeProvider>
    </div>
  );
}

export default App;
