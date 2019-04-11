import React from "react";
import "./Navbar.css";
import Home from "./images/HOME.png";
import mountains from "./images/mountains.png";

const Navbar = () => {
    return (
        <nav className="navContainer">
            <img className="homeImg" src={Home} alt=""/>
            <div className="projects">Projects |</div>
            <img className="mountainsNav" src={mountains} alt=""/>
            <div className="contact">| Contact</div>
        </nav>
    )
}

export default Navbar;