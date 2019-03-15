//schema gives the directions on what the database can hold
//what it can give and what it can recieve 
//creating a template, and now this is the only thing it can hold 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    completed: Boolean,
    title: String,
    description: String,
    price: Number,
    imgUrl: String,
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = mongoose.model("Todo", todoSchema)
