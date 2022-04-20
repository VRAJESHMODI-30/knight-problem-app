import React from "react";

const New = (props) => {
  const { nextMoves, cuurPos } = props;

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "1%",
        left: "3%",
        backgroundColor: "white",
        color: "red",
        fontWeight: 500,
      }}
    >
      Knight's next possible moves form <strong>"{cuurPos}"</strong> are:
      <div className="body">
        {nextMoves.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </div>
      <button type="button" onClick={handleReset} className="blink-btn">
        Reset
      </button>
    </div>
  );
};

export default New;
