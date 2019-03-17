const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 8888;

app.use(express.json());
app.use("/bounties", require("./bountyRoutes"))

mongoose.connect("mongodb://localhost:27017/bountyHunters", {useNewUrlParser: true}).then( () => {
    console.log("MongoDB is connected to the database")
})

app.listen(port, () => {
    console.log(`Serving is running on port ${port}`)
})

//this is all you need to get your server running 