import React from "react";
import beerSnob from "./beerSnob.png";

const Header = () => {
    return (
        <div className="headerContainer">
            <img className="header"src={beerSnob} alt=""/>
        </div>
    )
}

export default Header;