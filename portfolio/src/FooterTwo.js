import React from "react";
import "./FooterTwo.css";
import resume from "./images/resume.pdf";

const FooterTwo = () => {
    return (
        <div className="footerTwoContainer">
            <div className="socialLinkContainer">
                <a href="www.linkedin.com/in/madison-porter" id="socialLinks" class="fab fa-linkedin-in"></a>
                <a href="https://github.com/madieporter" id="socialLinks" class="fab fa-github"></a>
                <a href={resume} id="socialLinks" class="fas fa-file"></a>
            </div>
            <div className="nameTag">
                <i id="nameTags" class="fab fa-react"></i>
                <i id="nameTags" class="fab fa-js-square"></i>
                <i id="nameTags" class="fab fa-html5"></i>
                <i id="nameTags" class="fab fa-css3-alt"></i>
                <i id="nameTags" class="fab fa-node"></i>
                <i id="nameTags" class="fab fa-git"> </i>
                <i id="tagWords">mongoDB</i>
                <i id="tagWords">express</i>
            </div>

        </div>
    )
}

export default FooterTwo;