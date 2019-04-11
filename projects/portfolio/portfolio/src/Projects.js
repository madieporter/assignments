import React from "react";
import "./Projects.css";

import BeerSnob from "./BeerSnob.js";
import SwapMeet from "./SwapMeet.js";
import Colored from "./Colored.js";

const Projects = () => {
    return (
        <div>
            <h1 className="projectsTitle">PROJECTS</h1>
            <BeerSnob />
            <SwapMeet />
            <Colored />
        </div>
    )
}

export default Projects;