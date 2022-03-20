import React, {useEffect, useState} from "react";
import axios from 'axios';
import Game from "./Game";

function GameList(props) {
    const [games, setGames] = useState([]);
    const [showRatedOnly, setShowRatedOnly] = useState(false);

    useEffect(() => {
        axios.get('https://apis.wilders.dev/wild-games/games/')
            .then(response => setGames(response.data)) 
            .catch(error => console.log(error))
    }, []);

    const handleRatedGamesClick = () => {
        setShowRatedOnly(show => !show);
    }
    const removeGame = (id) => {
        setGames((games) => games.filter((game) => game.id !== id));
      };

    return (
        <div>
            <div className="wrapper_btn_filter_rating">
                <button type="button" onClick={handleRatedGamesClick}>
                    {showRatedOnly ? 'All' : 'Above 4.5'} rated games
                </button>
            </div>
            <div className="wrapper_list_games">    
                {games
                    .filter((game) => !showRatedOnly || game.rating > 4.5)
                    .map((game) => {
                    return( <Game key={game.id} id={game.id} name={game.name} released={game.background_image} rating={game.rating} removeGame={removeGame} />
                    )})
                }
            </div>
        </div>
    );
}

export default GameList;

