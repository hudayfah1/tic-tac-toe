import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import WINNING_COMBINATIONS from './components/WINNING_COMBINATIONS.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {X: "Player 1", O: "Player 2"}

function App() {
  const [playerNames, setPlayerNames] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];

  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  };

  const deriveWinner = (gameBoard, players) => {
    let winner;
    for (let combo of WINNING_COMBINATIONS) {
      const [symbol1, symbol2, symbol3] = combo.map(({ r, c }) => gameBoard[r][c]);
      if (symbol1 && symbol1 === symbol2 && symbol1 === symbol3) {
        winner = players[symbol1];
        break;
      }
    };
    return winner;
  }
  const winner = deriveWinner(gameBoard, playerNames);
  const isDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIdx, colIdx) => {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIdx, col: colIdx }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
  }
  const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = 'X';
    if (gameTurns.length % 2 !== 0)  currentPlayer = 'O';
    return currentPlayer;
  }
  const handleRematch = () => {
    setGameTurns([]);
    gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];
  }

  const handleNameChange = (symbol, newName) => {
    setPlayerNames(prevPlayerNames => {
      return {
        ...prevPlayerNames,
        [symbol]: newName,
      };
    })
  }

  const activePlayer = deriveActivePlayer(gameTurns);
 
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={playerNames.X} onChangeName={handleNameChange} symbol="X" isActive={activePlayer === 'X'}/>
          <Player name={playerNames.O} onChangeName={handleNameChange} symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        {(winner || isDraw) && <GameOver isDraw={isDraw} winner={winner} onRematch={handleRematch}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App