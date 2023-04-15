const mongoose = require("mongoose")
// const validator = require("validator")
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
const cartSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    mealId:{
        type: String,
        required: true,
    },
    day:{
        type:String,
        trim:true,
        capitalize: true
        //  "Saturday","Sunday","Tuesday", "Wednesday", "Thursday", "Friday"
    },
},{
    timestamps:true
})


const cartModel = mongoose.model("Cart", cartSchema)
module.exports = mealModel