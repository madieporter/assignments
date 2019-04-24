import React from "react";
import headshot from "./images/headshot.jpg";
import headshot2 from "./images/headshot2.jpg";
import mountains from "./images/mountains.png";

const Body = () => {
    return (
        <div className="body">
            <div className="myName">
                <p className="myName1">MADISON</p><p className="myName2">PORTER</p>
            </div>            
                <img className="headshot"src={headshot2} alt=""/>
            <div className="bottom">
                <img className="mountains" src={mountains} alt=""/>
                <div className="info">Based in Salt Lake City, UT</div>
            </div>
        </div>
    )
}

export default Body;