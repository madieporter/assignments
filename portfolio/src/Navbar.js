import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "./images/HOME.png";
import mountains from "./images/mountains.png";

const Navbar = (props) => {
    return (
        <div className="navContainer">
            <Link to="/"><img className="homeImg" src={Home} alt=""/></Link>
            <a href="/Projects" className="projects">Projects</a>
            <img className="mountainsNav" src={mountains} alt=""/>
            <Link to="/Contact" className="contact">Contact</Link>
        </div>
    )
}

export default Navbar;