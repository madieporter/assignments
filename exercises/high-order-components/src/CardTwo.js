import React from "react";
import {changeColor} from "./ToggleTwo";

const CardTwo = ({activeClass, toggle}) => {
    return (
        <div onClick={toggle} className="cardTwo">
            <div className={activeClass ? "blue" : "red"}>
            </div>
        </div>
    )
}

export default changeColor(CardTwo);