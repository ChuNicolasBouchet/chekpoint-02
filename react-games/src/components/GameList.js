import React, {useEffect, useState} from "react";
import axios from 'axios';
import Game from "./Game";

function GameList() {
    const [games, setGames] = useState([])
    useEffect(() => {
        axios.get('https://apis.wilders.dev/wild-games/games/')
            .then(response => setGames(response.data))
            .catch(error => console.log(error))

    }, []);
    
    return (
        <div>
            {games.map((game, id) => {
                return <Game key={game.id} name={game.name} released={game.released} background_image={game.background_image} rating={game.rating}/>
            })}

        </div>
    )
}

export default GameList;