import React from "react";
import '../styles/Header.css'

function Header(props) {
    return (
        <div className="wrapper__title">
            <h1 className="title">Welcome to the {props.siteName} website</h1>
        </div>
    )
    
}

export default Header;