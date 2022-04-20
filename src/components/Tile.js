import React from "react";
import "../styles/tile.css";

const Tile = (props) => {
  const { tileColor, row, col, knightPaths, path } = props;
  const handle = () => {
    knightPaths(row, col);
  };
  return (
    <button
      key={col + row}
      className={`tile ${tileColor}`}
      // id=""
      onClick={() => {
        handle();
      }}
    >
      <div
        style={{
          paddingTop: "6px",
          opacity: "1",
          fontWeight: 700,
        }}
      >
        {row}
        {col}
      </div>
    </button>
  );
};

export default Tile;
