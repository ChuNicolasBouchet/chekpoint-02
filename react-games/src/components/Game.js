import React from "react";

function Game(props) {
    return (
    <div>
        <h3>{props.name}</h3>
        <p>{props.released}</p>
        <p>{props.rating}</p>
    </div>
    );
    
}

export default Game;