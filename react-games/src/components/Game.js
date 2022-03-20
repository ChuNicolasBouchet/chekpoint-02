import { NavLink } from 'react-router-dom';

function Game(props) {
    return (
    <div>
        <NavLink to={`/games/${props.id}`}>
            <span className="game__card__title">
                {props.name}
            </span>
        </NavLink>
        <p>{props.released}</p>
        <p>{props.rating} / 5</p>
        <button type="button" className="remove-btn" onClick={() => props.removeGame(props.id)}>Remove game</button>        
    </div>
    );
    
}

export default Game;