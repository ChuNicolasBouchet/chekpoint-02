import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GameDetails() {
  
    const [gameDetails, setGameDetails] = useState(null);
    useEffect(() => {
        axios
            .get(`https://https://apis.wilders.dev/wild-games/games/${id}`)
            .then((response) => setGameDetails(response.data));
    }, []);
    

    
    

    return (
        <h1>coucou</h1>

    )
    
}

export default GameDetails