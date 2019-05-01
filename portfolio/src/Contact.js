import React from "react";
import "./Contact.css";
import FooterTwo from "./FooterTwo.js";
import heartHand from "./images/heartHand.png";
import headShot from "./images/headshot.jpg";

const Contact = () => {
    return (
        <div>
            <div className="ContactNameContainer">
                <div className="firstName">MADISON</div>
                <div className="lastName">PORTER</div>
            </div>
            <div className="meNotes">
                <p className="notes"><b><img className="contactHand" src={heartHand} alt=""/>Hey there. Thanks for visiting!</b><br></br> I am a full stack web developer specialized in the MERN stack. I relish connecting strong back-end development to innovative front-end ideas.<br></br>
                    I jump at any creative opportunity. I believe in bettering eachother, any way we can and creating a world where everyone is accepted and supported. My current focus is to create, share, inspire and to be inspired via the web.<br></br>
                </p>
                <img className="headShot" src={headShot} alt=""/>
            </div>
            <div className="emailBox">
                <div className="box" id="question">Have a question? Want to share ideas?</div>
                <div className="box" id="please">
                    <div >Please, get in touch!</div>
                    <i id="smiley" class="far fa-smile"></i>
                </div>
                <a className="box" id="sendEmail" href="mailto:madieporter@gmail.com" target="_top">madieporter@gmail.com</a>
            </div>
            <FooterTwo />
        </div>
    )
}

export default Contact;