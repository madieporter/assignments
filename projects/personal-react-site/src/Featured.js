import React from "react";
import favorites from "./favorites.png";
import buzz from "./buzz.png";
import electricIndia from "./electricIndia.png";
import averyBrown from "./averyBrown.png";
import berlinerWeiss from "./berlinerWeiss.png";
import trashyBlonde from  "./trashyBlonde.png";
import ab12 from "./ab12.png";
import bramlingX from "./bramlingX.png";
import misspentYouth from "./misspentYouth.png";
import arcadeNation from "./arcadeNation.png";
import movember from "./movember.png";

const FavoritePairings = () => {
    return (
        <div className="featuredContainer">
            <img className="favs" src={favorites} alt=""/>
            <img className="featured" src={electricIndia} alt=""/>
            <img className="featured" src={bramlingX} alt=""/>
            <img className="featured" src={arcadeNation} alt=""/>
            <img className="featured" src={berlinerWeiss} alt=""/>
            <img className="featured" src={averyBrown} alt=""/>
            <img className="featured" src={buzz} alt=""/>
            <img className="featured" src={ab12} alt=""/>
            <img className="featured" src={misspentYouth} alt=""/>
            <img className="featured" src={trashyBlonde} alt=""/>
            <img className="featured" src={movember} alt=""/>
        </div>
    )
}

export default FavoritePairings;