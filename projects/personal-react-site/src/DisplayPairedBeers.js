import React from "react";
import { withBeer } from "./BeerProvider.js";


const DisplayPairedBeers = (props) => {
    return (
        <div classname="contContainer">
            <div className="displayContainer">
                <div className="displayName">{props.pairedBeers.name}</div>
                <div className="displayTag">{props.pairedBeers.tagline}</div>
                <div className="displayAbv">ABV: {props.pairedBeers.abv}%</div>
                <img className="displayImg"
                src={props.pairedBeers.image_url} alt=""/>
                <div className="displayDescrip">{props.pairedBeers.description}</div>
            </div>
        </div>
    )
}

export default withBeer(DisplayPairedBeers);