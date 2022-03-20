import { NavLink } from 'react-router-dom';
import '../styles/Game.css'

function Game(props) {
    return (
    <div className='card__game' style={{ backgroundImage: `url(${props.background_image})`, width:'30rem'
      }}>
        <div className="card__game__top__clear"></div>
        <div className="card__game__bottom__description">
            <NavLink to={`/games/${props.id}`} ClassName="current">
                <span className="game__card__title">
                    {props.name}
                </span>
            </NavLink>
            <p>{props.released}</p>
            <p>{props.rating} / 5</p>
            <button type="button" className="btn" onClick={() => props.removeGame(props.id)}>Remove game</button>        
        </div>
    </div>
    );
    
}

export default Game;