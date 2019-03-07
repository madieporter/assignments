import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navBar">
                <Link to="/">Home</Link>
                <Link to="/allbeers">All Beers</Link>
                <Link to="/favorites">Favorite Pairings</Link>
            </div>
        </div>
    )
}

export default NavBar;