import React from "react";

const Pet = (props) => {

    return (
        <div>
            <h3>Pet: {props.name}</h3>
            <div>Breed: {props.breed}</div>
        </div>
    )
}


export default Pet;