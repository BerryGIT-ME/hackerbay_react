import BoardSize from "./components/BoardSize";
import { BoardSizeProvider } from "./context/BoardSizeContext";

function App() {
  return (
    <div>
      <BoardSizeProvider>
        <BoardSize />
      </BoardSizeProvider>
    </div>
  );
}

export default App;
