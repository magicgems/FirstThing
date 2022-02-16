import React, { useState } from 'react';
import Board from './TicTacToe';
import './styles.css';

export default function App() {
  const [selTile, setSelTile] = useState(0);

  function handleTileClick(newSelTile) {
    setSelTile(newSelTile);
  }

  return (
    <>
      {selTile === 0 ? (
      <div className="tile">
        <button className="option" onClick={() => handleTileClick(1)}>Tic Tac Toe</button>
      </div> 
      ) : <button className="simpleButton" onClick={() => setSelTile(0)} >Home page</button>
    }
      {selTile === 1 ? (<Board />) : null}
          </>
  )
}
