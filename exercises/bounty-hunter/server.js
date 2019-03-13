const express = require("express");
const app = express();
const uuid = require("uuid");

const data = require("./database.js");
const port = 8888;

app.use(express.json());

app.get("/bounty", (req, res) => {
    const found = (data);
    if (found) {
        res.send(found)
    } else {
        res.send("Bounty database not found")
    }
    res.send(data)
})

app.get("/food/:_id", (req, res) => {
    const {_id} = req.params
    const found = (data.find(bounty => bounty._id === _id))
    if (found) { 
        res.send(found)
    } else {
        res.send("Bounty not found")
    }
})

app.post("/bounty", (req, res) => {
  if (Object.keys(req.body).length > 0) {
    const newBounty = req.body;
    newBounty._id = uuid.v4();
    database.push(req.body);
  } else {
      res.send("Not a valid bounty.")
  }
})

app.put("/bounty/:_id", (req, res) => {
    const updatedBounty = req.body;
    const {_id} = req.params;
    const found = data.forEach(bounty => {
        if (bounty._id === _id) {
            bounty = Object.assign(bounty, updatedBounty)
        }
    })
    if (found) { 
        res.send(found) 
    } else {
        res.send("Updated bounty not found")
    }
})

app.delete("./bounty/:_id", (req, res) => {
    const {_id} = req.params
    const index = data.findIndex(bounty => bounty._id === _id)
    data.splice(index, 1)
    if (index) {
        res.send("Bounty successfully removied") 
    } else {
        res.send("Bounty not found.")
    }
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})