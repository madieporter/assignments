import React from "react";
import { Link } from "react-router-dom";

import home from "./home.png";
import cheers from "./cheers.png";
import forkKnife from "./forkKnife.png";

const NavBar = () => {
    return (
        <div>
            <div className="navBar">
                <div className="navContainer">
                    <Link to="/"><img className="navLogo" src={home} alt=""/></Link>
                    <Link to="/allbeers"><img className="navLogo" src={cheers} alt=""/></Link>
                    <Link to="/featured"><img className="navLogo" src={forkKnife} alt=""/></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;