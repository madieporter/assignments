import React from "react";
import {withToggler} from "./ToggleOne";

const CardOne = ({on, toggle}) => {
    return (
        <div onClick={toggle} className="cardOne">
            <div className={on ? "show" : "hide"}>
                !!!!!!!!!
            </div>
        </div>
    )
}

export default withToggler(CardOne);