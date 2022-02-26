import React, { useState } from 'react';
import Board from './TicTacToe';
import Star from './Star';
import SmallMath from './SmallMath';
import './styles.css';
import { MultipleTabs } from './utils';
const IDs = {NONE : '0', AKSHARA : '5762', SAHASRA : '7852'};

function Login() {
  const [loggedInId, setLoggedInId] = useState('0');
  const refLoginID = React.useRef();
  let retElement = null;

  function checkLogin(event) {
    event.preventDefault();
    const login = refLoginID.current.value;
    if (login === IDs.AKSHARA || login === IDs.SAHASRA) {
      setLoggedInId(login);
    }
    else
      setLoggedInId(IDs.NONE);
  }

  React.useEffect(() => {
    refLoginID?.current?.focus();
  }
  );

  switch (loggedInId) {
    case IDs.NONE:
    retElement = (
      <form>
        <div>
          <input ref={refLoginID} className="login" />
          <button type="submit" onClick={checkLogin}>Login</button>
        </div>
      </form>);
      break;
    case IDs.AKSHARA:
      retElement = <Star />;
      break;
    default : 
      retElement = <SmallMath />;
  }
  return (retElement);
}

export default function App() {
  const [selTile, setSelTile] = useState(0);

  const tabs = [
    {key: 0, displayName: "Tic Tac Toe", displayComponent: <Board />},
    {key: 1, displayName: "Login", displayComponent: <Login />}
  ];

const props = {
  title: "Welcome",
  selection: selTile,
  onClick: setSelTile,
  buttonClass: "tile1",
  returnButtonClass: "retButton1",
  returnDisplay: `<< Home page`,
  tabs: tabs
}
  
  return (
    <MultipleTabs {...props} />
  )
}
