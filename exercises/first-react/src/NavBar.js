import React from "react";

const NavBar = () => {

    const styles = {
        width: "30px",
        height: "20px"
        
    }

    return ( 
        <div className="navBar" style={styles}>
            <div className="box1">E-mail Signup</div>
            <div className="box2">Trending</div>
            <div className="box3">Recipes</div>
            <div className="box4">Nutritional FAQs</div>
            <div className="box5">Find a Retailer</div>
            <div className="box6">Social Scene</div>
            <div className="box7">Flavors</div>
            <div className="box8">Shoppe</div>
        </div>
    )
}

export default NavBar