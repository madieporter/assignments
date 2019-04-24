import React from "react";
import "./About.css";
import heartHand from "./images/heartHand.png";
import arrowDown from "./images/arrowDown.png";

const About = () => {
    return (
        <div className="aboutContainer">
            <img className="heartHand" src={heartHand} alt=""/>
            <div className="nameContainer">
                <div className="firstName">MADISON </div>
                <div className="lastName">PORTER</div>
            </div>
            <div id="arrowDown">
                <div className="aboutInfo">a full-stack web developer based in the heart of Salt Lake City, Utah.</div>
                <img className="arrow" src={arrowDown} alt=""/>
            </div>
        </div>
    )
}

export default About;