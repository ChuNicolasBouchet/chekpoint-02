import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

function GameDetails() {

    const { id } = useParams();
    console.log(id);
    const [gameDetails, setGameDetails] = useState({});

    useEffect(() => { axios.get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((response) => setGameDetails(response.data))
            .catch(error => console.log(error));
    }, [id]);
    
   
    return (
        <div>
          <NavLink to='/'><button>Back to gameList</button></NavLink>
          <h1>{gameDetails.name}</h1>
          <h1>{gameDetails.slug}</h1>
 

        </div>
      );
    
}

export default GameDetails