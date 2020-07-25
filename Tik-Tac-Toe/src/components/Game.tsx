import React, { useState } from "react";
import Board from "./Board";

function calculateWinner(squares: Array<Number>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const x0 = xIsNext ? "X" : "O";

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };
  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";
      console.log(move);
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  const handleClick = (index: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    //return if won or occpied
    if (winner || squares[index]) return;
    // select square
    squares[index] = x0;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };
  return (
    <>
      <h1>React Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? `Winner: ${winner}` : `Next Player ${x0}`}</h3>
      </div>
    </>
  );
};
export default Game;
