import React from "react";
import { withBeer } from "./BeerProvider.js";

const AllBeers = (props) => {
    console.log(props)
    return (
        <div className="contContainer">
            <div className="displayContainer">
                <div className="displayName">{props.beer.name}</div>
                <div className="displayTag">{props.beer.tagline}</div>
                <div className="displayAbv">ABV {props.beer.abv}%</div>
                <img className="displayImg"
                src={props.beer.image_url} alt=""/>
                <div className="displayDescrip">{props.beer.description}</div>
            </div>
        </div>
    )
}



export default withBeer(AllBeers);