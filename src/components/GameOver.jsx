export default function GameOver({ winner, isDraw, onRematch }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{isDraw ? "It's a draw!" : `${winner} won!`}</p>
            <p>
              <button onClick={onRematch}>Rematch!</button>
            </p>
        </div>
    )
}