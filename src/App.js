import BoardSize from "./components/BoardSize";
import { BoardSizeProvider } from "./context/BoardSizeContext";
import Column from "./components/Column";
import "./app.css";

function App() {
  return (
    <div className="container">
      <BoardSizeProvider>
        <BoardSize />
        <Column />
      </BoardSizeProvider>
    </div>
  );
}

export default App;
