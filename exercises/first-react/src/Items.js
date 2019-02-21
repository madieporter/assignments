import React from "react";
import lacroix1 from "./lacroix1.png";
import lacroix2 from "./lacroix2.png";
import lacroix3 from "./lacroix3.png";

const Items = () => {
    return (
        <div>
            <div className="cans">
                <div className="canOne">
                    <img src={lacroix1} alt=""/>
                </div>
                <div className="canTwo">
                    <img src={lacroix3} alt=""/>
                </div>
                <div className="canThree">
                    <img src={lacroix2} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Items;