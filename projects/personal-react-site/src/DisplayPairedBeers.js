import React from "react";
import { withBeer } from "./BeerProvider.js";


const DisplayPairedBeers = (props) => {
    return (
        <div>
            <div>{props.pairedBeers.name}</div>
            <div>{props.pairedBeers.abv}</div>
            <div>{props.pairedBeers.tagline}</div>
            <div>{props.pairedBeers.description}</div>
            <img src={props.pairedBeers.image_url} alt=""/>
        </div>
    )
}

export default withBeer(DisplayPairedBeers);