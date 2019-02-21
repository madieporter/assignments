import React from "react";

const Spot = (props) => {

    const styles = {
        width: "430px",
        height: "220px",
        margin: "20px",
        textAlign: "center",
        fontSize: "30px",
        fontFamily: "'Nova Mono', monospace",
        borderRadius: "30px",
        backgroundColor: props.backgroundColor
    }
    
    return (
        <div style={styles}>
            <div>Visit {props.place}!</div>
            <div>For only {props.price}</div>
            <div>The best time to go is {props.timeToGo}</div>
        </div>
    )
}

export default Spot; 