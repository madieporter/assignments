//Server allows you to handle requests
//Servers listen for requests and gives back responses (receptionist at front desk)

//Installation process for any time you create a server
// 1) npm init -y (creates JSON package/file all dependencies are listed, and what node modules are needed)
// 2) npm i express
// 3) touch .gitignore (read by Github, ignores anything in that file)
// 4) touch server.js 
// 5 npm i -g nodemon (allows updates to server automatically / only have to install once)
// 6) nodemon <filename>.js (to start nodemon)


const express = require("express");
//brings in express module
const app = express();
// Saving all express libraries into the variable app
const uuid = require("uuid");
//Instal random ID creator/package (only if you need IDs)

const port = 8888;
//create port as a variable, so that you can change it if need be

app.use(express.json())
//changes incoming JSON info/object information into JS

//store this into database.js (module.exports = []
//                                      const database = require("./database.js"))
const database = [
    {
        name: "spaghetti",
        type: "pasta",
        sauce: "red",
    },
    {
        name: "fettuccine",
        type: "pasta",
        sauce: "alfredo",
    },
    {
        name: "lasagna",
        type: "pasta",
        sauce: "marinara",
    }
]

app.get("/food", (req, res) => {
    res.send({database})
})
//The express library (app) is handling the get request from the client. The first argument is the URL path to 
// the API. The second argument is a callback function taking two arguments - request and response - and in the function we are 
// sending back the database.js (all of the data for the API) as the response to the client. 


app.get("/food/:_id", (req, res) => {
    const {_id} = req.params
    res.send(data.find(food => food._id === _id))
})
// the colon : is saying, whatever comes after me is the automatic key for the specific API 
// line 55 - destructuring - would be req.params._id - that is the unique key - (req is the request object)
// then we have to create the function to find the id the client is search for. 
// find is looping through the array to find and pull what is specified
// like 56 is saying- send back the data that is found from what we specified - does the searched ID match the
// ID of that specific ID - if so, pull it out and display it. And that is the response. 

app.put("/food/:_id", (req, res) => {
    const updatedObj = req.body;
    const {_id} = req.params;
    data.forEach(food => {
        if (food._id === _id) {
            food = Object.assign(food, updatedObj)
        }
    })
    res.send(data)
})
//we are giving updatedObj the value of the body of the requested object - the entire object, updated and all
//and then again, destructuring the req.params.id which is the unique key of said object
//forEach is the same as map, except for it doesn't return a new array. We are using it so that we can
//access and map through the array, and it will update it with out having to return anything. 
//and then we are saying - if the ID of food equals the searched ID - return that object which is equal to 
//what has been changed. 
//line 70 is saying the object is food and we are assigning the changes of req.body to updatedObj -
//to fully change the whole array.
//Outside of the forEach function - we are sending back the updated object as the response to the client. 

app.post("/food", (req, res) => {
    const newObj = req.body;
    newObj._id = uuid.v4();
    database.push(req.body);
    res.send(database);
})
//Again, we are declaring the body of the requested object (which is newly created from the client) as newObj
//we are then giving the newObj a random id
//then we are pushing the newObj (req.body) into the array inside of database
//and then sending back new array as the response to the client


app.delete("/food/_id", (req, res) => {
    const {_id} = req.params
    const index = data.findIndex(food => food._id === _id)
    data.splice(index, 1)
    res.send("Item Successfully Removed")
})
//Again, destructuring the req.params._id (the unique key of specified object) 
//and then we are giving index the value of the specified object id that the client is searching for 
//findIndex searches through the array to find what you have asked it to look for and then returns the index where
//it was found. Then we are splicing specified object out of the array. Splice takes to parameters
//the index number - which we pulled with findIndex - and then the number of how many we want to remove (1).
//then we send back a message to the client as the response that it was successful 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
//establishes where it connects, initiates server. available ports 0-65535 - use about 1023