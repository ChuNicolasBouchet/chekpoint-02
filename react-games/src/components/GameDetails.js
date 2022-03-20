import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import '../styles/GameDetails.css';

function GameDetails() {

    const { id } = useParams();
    console.log(id);
    const [gameDetails, setGameDetails] = useState({});

    useEffect(() => { axios.get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((response) => setGameDetails(response.data))
            .catch(error => console.log(error));
    }, [id]);
    
   
    return (
        <div className='wrapper__gamedetails'>
          <NavLink to='/'><button className="btn">Back to gameList</button></NavLink>
          <div className="card__gamedetails">
            <img className='card__gamedetails__img' src={gameDetails.background_image} alt={gameDetails.name} />
            <div className='card__gamedetails__description'>
              <h1>{gameDetails.name}</h1>
              <p> Rated : {gameDetails.rating} / 5</p>
              <p>Released on : {gameDetails.released}</p>
            </div>      
          </div>
        </div>
      );
    
}

export default GameDetails