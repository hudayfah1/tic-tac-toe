export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map(({ player, square: { row, col } }) => <li key={`${row}${col}`}>{player} selected {row},{col}</li>)}
        </ol>
    );
}