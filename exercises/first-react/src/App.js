import React from "react";
import NavBar from "./NavBar";
import Info from "./Info";
import Items from "./Items";
import Footer from "./Footer";

const App = () => {

    const style = {
        backgroundImage: "url(https://buidln.clipdealer.com/009/297/195//previews/7--9297195-Beautiful%20Water%20Bubbles%20Rising%20Up.%20Loopable%203d%20Animation%20of%20Sparkling%20Water%20on%20White%20and%20Black%20Backgrounds.%20HD%201080..jpg)",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center"
    }

    return (
    <div style={style}>
        <NavBar />
        <Items />
        <Info />
        <Footer />
    </div>
    )
}


export default App;