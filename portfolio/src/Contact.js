import React from "react";
import "./Contact.css";

import headShot from "./images/headshot.jpg";

const Contact = () => {
    return (
        <div>
            <div className="ContactNameContainer">
                <div className="firstName">MADISON </div>
                <div className="lastName">PORTER</div>
            </div>
            <div className="meNotes">
                <p className="notes"><b>Hey there. Thanks for visiting!</b><br></br> I am a full stack web developer specialized in the MERN stack. I relish connecting strong back-end development to innovative front-end ideas.<br></br>
                    I jump at any creative opportunity. My current focus is to create, share, inspire and to be inspired via the web. I believe in bettering eachother, any way we can.<br></br>
                    I like the outdoors, cooking / crafting, and my cat.
                </p>
                <img className="headShot" src={headShot} alt=""/>
            </div>
            <div>Please, contact me!</div>
        </div>
    )
}

export default Contact;