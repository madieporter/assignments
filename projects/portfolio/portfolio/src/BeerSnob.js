import React from "react";
import "./BeerSnob.css";
import beerSnob from "./images/BS.png";

const BeerSnob = () => {
    return (
        <div className="beerSnobContainer">
            <img className="beerSnobImg" src={beerSnob} alt=""/>
            <div className="beerSnobInfo">
                <h1 className="beerSnobTitle">BEER SNOB</h1>
                <p className="beerSnobAbout">Search your favorite food <br></br>to pair with the perfect beer.<br></br>
                    Featuring Laughing Dog Brewing.<br></br>
                </p>
                <div className="bsMadeWith">Made with React, JavaScript, CSS, Photoshop.</div>
                <div className="bsVisit">Visit Beer Snob</div>
            </div>
        </div>
    )
}

export default BeerSnob;