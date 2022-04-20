import "./App.css";
import Chessboard from "./components/Chessboard";

function App() {
  return (
    <>
      <div className="head">
        "Note:- Clicked the place of Knight's to know about it's next moves"
      </div>
      <div className="App">
        <Chessboard />
      </div>
    </>
  );
}

export default App;
