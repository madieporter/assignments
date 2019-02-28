import React from "react";
import {counter} from "./ToggleThree";

const Clicker = ({count, toggle}) => {
    return (
        <div>
            <button className="btn" onClick={toggle}>{count}</button>
        </div>
    )
}

export default counter(Clicker);