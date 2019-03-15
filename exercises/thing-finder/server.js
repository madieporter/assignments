const express = require("express");
const app = express();

const data = require("./database.js");
const port = 8888;

app.use(express.json());

app.get("/things", (req, res) => {
    let {type, name, price, maxPrice, minPrice} = req.query;
    if (type) {
        const typeOf = data.filter(things => things.type === type)
            res.send(typeOf)
    } else if (name) {
        const nameOf = data.filter(things => things.name === name)
        res.send(nameOf)
    } else if (price) {
        const priceOf = data.filter(things => things.price === price)
        res.send(priceOf)
   
    } else if (maxPrice) {
        const maxPrice = data.filter(things => things.price < maxPrice)
        res.send(maxPrice)
    } else if (minPrice) {
         const minPrice = data.filter(things => things.price > minPrice)
    } else {
        res.send(data)
    }
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})