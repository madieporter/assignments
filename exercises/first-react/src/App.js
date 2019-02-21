import React from "react";
import NavBar from "./NavBar";
import Info from "./Info";
import Items from "./Items";
import Footer from "./Footer";

const App = () => {

    const style = {
        backgroundImage: "url(https://banner2.kisspng.com/20180413/kgq/kisspng-stock-photography-royalty-free-water-bubbles-5ad10c1156e3d2.7410806015236495533559.jpg)";
    }

    return (
    <div styles={style}>
        <NavBar />
        <Info />
        <Items />
        <Footer />
    </div>
    )
}


export default App;