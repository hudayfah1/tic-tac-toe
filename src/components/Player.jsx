import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(editing => !editing);
        if (isEditing) onChangeName(symbol, playerName);
    };
    const handleChange = ({ target }) => {
        setPlayerName(target.value);
    };
    const handleKeyUp = ({ key }) => {
      if (key === 'Enter') handleEdit();
    };

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} onKeyUp={handleKeyUp}></input>;

    return (
      <li className={isActive ? 'active' : ''}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button type="button" onClick={handleEdit}>{!isEditing?"Edit":"Save"}</button>
      </li>
    );
}