import React, { useEffect, useState } from "react";
import "../styles/chessboard.css";
import New from "./New";
import Tile from "./Tile";

const tileCol = ["1", "2", "3", "4", "5", "6", "7", "8"];
const tileRow = ["A", "B", "C", "D", "E", "F", "G", "H"];
const map1 = new Map();
for (let i = 0; i < tileRow.length; i++) {
  map1.set(tileRow[i], i + 1);
}

const paths = [];

const Chessboard = () => {
  const [ok, setOk] = useState(false);
  const [currPos, setcurrPos] = useState("");

  //Gives knight next move is in the chessboard or not...
  function isValid(row, col) {
    if (row <= 0 || col <= 0 || row > 8 || col > 8) {
      return false;
    }
    return true;
  }

  //Finding next posible moves:
  function knightPaths(row, col) {
    const dx = [-1, -2, -1, -2, 1, 2, 1, 2];
    const dy = [-2, -1, 2, 1, -2, -1, 2, 1];
    setcurrPos(`${row}${col}`);
    const rowNum = map1.get(row);
    const colNum = col - "0";

    //Pushing valid moves only:
    for (let i = 0; i < 8; i++) {
      if (isValid(rowNum + dx[i] && colNum + dy[i])) {
        paths.push([tileRow[rowNum + dx[i] - 1], (colNum + dy[i]).toString()]);
      }
    }

    for (let i = 0; i < paths.length; i++) {
      console.log(paths[i][0] + paths[i][1]);
      console.log(" ");
    }
    setOk(true);
  }

  let board = [];
  for (let i = tileCol.length - 1; i >= 0; i--) {
    for (let j = 0; j < tileRow.length; j++) {
      const num = i + j + 2;
      if (num % 2 === 0) {
        board.push(
          <Tile
            key={tileRow[i] + tileCol[j]}
            tileColor={"dark-tile"}
            row={tileRow[j]}
            col={tileCol[i]}
            knightPaths={knightPaths}
          />
        );
      } else {
        board.push(
          <Tile
            key={tileRow[i] + tileCol[j]}
            tileColor={"light-tile"}
            row={tileRow[j]}
            col={tileCol[i]}
            knightPaths={knightPaths}
          />
        );
      }
    }
  }

  return (
    <>
      {ok && <New nextMoves={paths} cuurPos={currPos} />}
      <div className="board">{board}</div>
    </>
  );
};

export default Chessboard;
