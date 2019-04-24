import React from "react";
import "./FooterOne.css";

const FooterOne = () => {
    return (
        <div className="footerOneContainer">
            <div className="more">More projects coming soon!</div>
            <div className="emailMe">
                <a href="mailto:madieporter@gmail.com" target="_top">Say hello! E-mail me.</a>
                <i id="smiley" class="far fa-smile"></i>
            </div>
        </div>
    )
}

export default FooterOne;