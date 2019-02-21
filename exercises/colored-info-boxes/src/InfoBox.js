import React from "react";


const InfoBox = (props) => {
    const styles = {
        width: "500px",
        height: "500px",
        margin: "20px",
        textAlign: "center",
        fontFamily: "'Baloo Bhaina', cursive",
        fontSize: "30px",
        backgroundColor: props.backgroundColor
    }

    return (
        <div>
            <div style={styles}>
                <div>{props.title}</div> 
                <div>{props.subtitle}</div>
                <div>{props.information}</div>
            </div>
        </div>
    )
}

export default InfoBox;