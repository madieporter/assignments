const express = require("express");
const app = express();
const uuid = require("uuid");

const database = require("./database.js");
const port = 8888;

app.use(express.json());

app.get("/madisonlynn/todo", (req, res) => {
    res.send({database});
})

app.get("/madisonlynn/todo/:_id", (req, res) => {
    const {_id} = req.params;
    res.send(database.find(todo => todo._id === _id));
})

app.put("/madisonlynn/todo/:_id", (req, res) => {
    const updatedObj = req.body;
    const {_id} = req.params;
    database.forEach(todo => {
        if (todo._id === _id) {
            todo = Object.assign(todo, updatedObj)
        }
    })
    res.send(database);
})

app.post("/madisonlynn/todo", (req, res) => {
    const newObj = req.body;
    newObj._id = uuid.v4();
    database.push(req.body);
    res.send(database);
})

app.delete("/madisonlynn/todo/_id", (req, res) => {
    const {_id} = req.params;
    const index = data.findIndex(todo => todo._id === _id);
    database.splice(index, 1);
    res.send("Item was successfully deleted");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


