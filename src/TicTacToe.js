
import * as React from 'react';
import {useLocalStorageState} from './utils';
import './styles.css';

export default function Board() {

  const [squares, setSquares] = useLocalStorageState('localttt', Array(9).fill(null));
  const initHistory = [squares];
  
  const [history, setHistory] = useLocalStorageState('ttthistory', initHistory);
  const [currStep, setCurrStep] = useLocalStorageState('tttStep', 0);

  const nextValue = calculateNextValue();
  const winner = calculateWinner();

  function History() {

    function renderStepGoto(i) {
      const disableButton = i === currStep;
      return (
        <li>
          <button onClick={() => setBoard(i)} disabled={disableButton}>
            {i === 0 ? 'Go to game start' : `Go to step ${i+1}`} { disableButton ? ' (Current)': ''}
          </button>
        </li>
      );
    }

    return (
        <div className="status">
          {calculateStatus()}

          <ol>
            {history.map((h, i) => renderStepGoto(i))}
          </ol>
        </div>
    );
  }

  function setBoard(step) {
    setSquares(history[step]);
    setCurrStep(step);
  }

  function selectSquare(square) {
    if (squares[square]) return;
    
    if (winner) return;

    const updSquares = [...squares];
    updSquares[square] = nextValue;
    setSquares(updSquares);

    let updHistory = [...history];
    if (currStep < (updHistory.length - 1)) {
      updHistory = updHistory.filter((item, index) => index <= currStep);
    }
    updHistory = [...updHistory, updSquares];
    setHistory(updHistory);
    setCurrStep(updHistory.length - 1);
  }

  function restart() {
    const emptyBoard = Array(9).fill(null);
    setSquares(emptyBoard);
    setHistory([emptyBoard]);
    setCurrStep(0);
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  function calculateNextValue() {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
  }

  function calculateStatus() {

    return winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
        ? `Scratch: Cat's game`
        : `Next player: ${nextValue}`
  }

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="restart" onClick={restart}>
          Restart Game
        </button>
      </div>
      <div className="game-info">
        <History />
      </div>
    </div>
  )
}


