import React, { FunctionComponent } from "react";
import Square from "./Square";

type BoardProps = {
  squares: Array<string | null>;
  onClick: Function;
};

const Board: FunctionComponent<BoardProps> = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);
export default Board;
