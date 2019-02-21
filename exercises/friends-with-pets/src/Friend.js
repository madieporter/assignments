import React from "react";
import Pet from "./Pet.js";

const Friend = (props) => {

    const mappedPets = props.pets.map((pet, i) => {
        return (
          <Pet name={pet.name}
                breed={pet.breed}
                key={i+pet.name}
          />
        )
    })

    const friendStyles = {
        width: "300px",
        height: "400px",
        margin: "20px",
        textAlign: "center",
        borderRadius: "20px",
        marginTop: "60px",
        backgroundColor: "#D4470D"
    }
    return (
        <div style={friendStyles}>
            <h2>My friend: {props.name}</h2>
            <div>age: {props.age}</div>
            {mappedPets}
        </div>
    )
}

export default Friend;