import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navBar">
                <Link to="/">home</Link>
                <Link to="/allbeers">beers</Link>
                <Link to="/featured">featured</Link>
            </div>
        </div>
    )
}

export default NavBar;