import React from "react";
import {counter} from "./Toggle";

const Clicker = ({count, toggle}) => {
    return (
        <div>
            <div>{count}</div>
            <button className="btn" onClick={toggle}>+</button>
        </div>
    )
}

export default counter(Clicker);