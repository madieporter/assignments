Databases - MERN

2 Main Types:
    -Relational
        -The go to was this 
        -What is Relational Databases? 
            - Enforce Rigidity(inability to be changed) by default 
                -SQL - sequal (example of a type of Relational Database)
    -Non Relational
        -This database type can take whatever information and save it
            -Mongoose - enforces rigidity with MongoDB
            -MongoDB 
                -New databases came out and we can structure
                    our databases as objects / easier to jump into databases
                -doesnt change how we visualize our data because everything
                    we save, we save as an object so we structure our 
                    database as a collection of objects.   
                    
Mongoose Schema:
    -gives us the ability to set up consistent data
    -A library for connecting MongoDB and running queries from Node.js
        -Does 3 things for us:
            1. Write document Schemas to know what our database should look like
                -documents are equivilant to a resource and a database
                    -The specifics- a collection of resources
            -Schemas
                -blueprint
                -What enforces rigidity
            2. Gives us methods to query our database with 
            3. Connects to our database 

npm init -y - create package json
npm install express mongoose
touch server.js

then get basic server set up 

const express = require("express")
const app = express()
const mongoose = require("mongoose")
        {first connnect mongoose to our database and then we'll start defining 
        and then we'll create what our database should look like, this is 
        something we'll add on every server file before our routes}

FOLDERS ----
    -Routes Folder 
            -We interact with the model in our database

    -Models Folder
        -We define what should our data look like in our database
        -Models define what resources look like --- referred to as schemas...... also models 
                                                        -schema/model defines what a Model should look like 
        -Schema/model is the blueprint
        -Document/Resource is what we make to define that blueprint
                -IN MODEL FOLDER - make a folder to define the blueprint
                    -const mongoose = require("mongoose") 
                    -CONST Schema = mongoose.Schema

                    const todoSchema = new Schema({
                        (this is where we define what the object looks like)
                        (Use uppercase to define its a datatype)
                        title: String,
                            OR
                        title: { //Gives more options to give more detail / what can be configured 
                            type: String,
                            required: true, --- not enforced, have to send it 
                          (example)  unique: true,  ---- no duplicated entries  / like a username 
                            lowercase: true ---- if unique, make lowercase: true so everything is compared lowercase 
                        },
                        description: String,
                        isCompleted: Boolean,
                        createdAt: {
                            type: Date,
                            default: Date.now
                        }
                    })
    -Dont need to hardcode or use uuid to add an ID into the blueprint / MongoDB is set up to do that for us 

Dont forget to export it

module.exports = mongoose.model("todo", todoSchema)
        -Takes two arguments
            -Arg1 - String representation of what this collection should be called inside of our database / Name of model that is using 
                        this Scheme to create objects / name of collection itself 
            -Arg2 - For this collection, which Schema will it be tied to --- Naming Arg2 what schema Arg1 is tied to
                        (the name of the schema you just created)

//Middlewares

app.use("/todo), require("./todoRouter"))
    -using /todo as the route name -in todoRouter is all of our requests. 
        

//Routes

                |
//DB connection v

//mongoose is a package that allows us to get stuff and put stuff into that database 
mongoose.connect(mongoDB://localhost:27017/first-DB", {useNewUrlPaser: true}, () => {
    console.log("Connected to the database")
}) 
                                        --- only 27017 - the server number 
                                            its running on, installed   
                                            locally on our harddrive but its like its own server, 
                                            it has its own listen. 
                                (whatever comes after the 27017/
                                 is the name of your database --- 
                                you are naming it here)

mongoDB protocol - connect mongoose to our locol mongoDB server


app.listen(8888, () => {
    console.log("Serving is running on port 8888")
})