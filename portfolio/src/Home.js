import React from "react";
import "./App.css";

import About from "./About.js";
import Projects from "./Projects.js";
import FooterOne from "./FooterOne.js";
import FooterTwo from "./FooterTwo.js";

const Home = () => {
    return (
        <div>
            <About />
            <Projects />
            <FooterTwo />
        </div>
    )
}

export default Home;