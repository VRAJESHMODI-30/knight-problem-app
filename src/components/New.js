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
      Possible next moves form <strong>"{cuurPos}"</strong> are:
      {nextMoves.map((e) => {
        return <li key={e}>{e}</li>;
      })}
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default New;
