import React from "react";
import "./Colored.css";
import colored1 from "./images/colored1.png";
import colored2 from "./images/colored2.png";
import colored3 from "./images/colored5.png";

const Colored = () => {
    return (
        <div >
            <div className="coloredOneContainer">
                <img className="coloredImg" src={colored1} alt=""/>
                <div className="coloredTitle">COLORED</div>
            </div>
            <div className="coloredTwoContainer">
                <div className="coloredInfo">A live paint application to explore and release creativity freely and with ease.</div>
                <img className="coloredImg" src={colored2} alt=""/>
            </div>
            <div className="coloredThreeContainer">
                <img className="coloredImg" src={colored3} alt=""/>
                <div className="coloredAbout">
                    <div className="cMadeWith">Made with React, JavaScript, CSS, NodeJS, Express, Adobe XD</div>
                    <div className="cMadeWith">Implemented user authentication with JSON Web Tokens.</div>
                    <a href="https://colored-app.herokuapp.com" className="cVisit">Visit Colored</a>
                </div>
            </div>
        </div>
    )
}

export default Colored;