import React from 'react';
import Spot from "./Spot.js";

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]

const App = () => {

  const mappedVacationSpots = vacationSpots.map((spot, i) => {
    let price;
    if (spot.price <= 500) {
      price = `$${spot.price}`
    } else if (spot.price <= 1000) {
      price = `$$${spot.price}`
    } else if (spot.price > 1000) {
      price = `$$$${spot.price}`
    }

    let backgroundColor;
    if (spot.timeToGo === "Fall") {
      backgroundColor = "#E8B30C"
    } else if (spot.timeToGo === "Winter") {
      backgroundColor = "#1A5D87"
    } else if (spot.timeToGo === "Spring") {
      backgroundColor = "#FF9CCF"
    } else if (spot.timeToGo === "Summer") {
      backgroundColor = "#FF5425"
    }

    return (
      <Spot place={spot.place}
            price={price}
            timeToGo={spot.timeToGo}
            backgroundColor={backgroundColor}
            key={i+spot.place}
      />
    )
  }) 

  const styles = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#9dc9dd8a",
    height: "100vh"
  }

    return (
      <div style={styles}>
        {mappedVacationSpots}
      </div>
    )
}


export default App;
