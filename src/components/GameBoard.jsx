export default function GameBoard({ onSelectSquare, board }) {
    return (
       <ol id="game-board">
        {board.map((row, rowIdx) => (
            <li key={rowIdx}>
                <ol>
                    {row.map((boxSymbol, boxSymbolIdx) => (
                        <li key={boxSymbolIdx}>
                            <button onClick={() => onSelectSquare(rowIdx, boxSymbolIdx)} disabled={boxSymbol !== null}>{boxSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>))}
       </ol>
    );
}