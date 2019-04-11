import React from "react";
import "./About.css";
import heartHand from "./images/heartHand.png";

const About = () => {
    return (
        <div className="aboutContainer">
            <img className="heartHand" src={heartHand} alt=""/>
            <div className="nameContainer">
                <div className="firstName">MADISON </div>
                <div className="lastName">PORTER</div>
            </div>
            <div className="aboutInfo">is a full-stack web developer based in the heart of Salt Lake City, Utah.</div>
        </div>
    )
}

export default About;