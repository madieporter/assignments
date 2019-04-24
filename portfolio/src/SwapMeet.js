import React from "react";
import "./SwapMeet.css";
import sw1 from "./images/swapMeet1.png";

const SwapMeet = () => {
    return (
        <div className="swapMeetContainer">
            <div className="swapMeetInfo">
                <h1 className="swapMeetTitle">SWAP MEET</h1>
                <p className="swapMeetAbout">A resource for independent contractors and freelancers to swap services and keep track of their trades.</p>
                <div className="smMadeWith">In collaboration with Stephanie Lane.</div>
                <div className="smMadeWith">Made With React, JavaScript, CSS, NodeJS, Express, Photoshop.</div>
                <a href="https://swap-meet-for-freelancers.herokuapp.com/" className="smVisit">Visit Swap Meet</a>
            </div>
                <img className="swapMeetImg" src={sw1} alt=""/>
        </div>
    )
}

export default SwapMeet;