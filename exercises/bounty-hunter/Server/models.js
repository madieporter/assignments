const mongoose = require("mongoose");
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstName: String,
    lastName: String,
    living: {
        type: Boolean,
        default: true
    },
    bountyAmount: Number,
    image: String,
    type: String
})

module.exports = mongoose.model("Bounty", bountySchema)