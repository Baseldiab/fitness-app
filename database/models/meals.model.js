const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mealSchema = mongoose.Schema({
    carb:{
        type:String,
        trim:true,
        capitalize: true,
        enum:["rice", "potatoes", "sweet potato" ,"oats" ]
    },
    // بامية + كوسة + فاصوليا خضراء + بسلة 
    vegetables:{
        type:String,
        trim:true,
        capitalize: true,
        enum:["zucchini", "pea" ,"okra", "green beans","broccoli" ]
    },
    protein:{
        type:String,
        trim:true,
        capitalize: true,
        enum:["meat", "chicken", "fish" ,"tuna fish"]
    },
    day:{
        type:String,
        trim:true,
        capitalize: true,
        enum:["Saturday","Sunday","Tuesday", "Wednesday", "Thursday", "Friday"]
    },

},{
    timestamps:true
})


const mealModel = mongoose.model("Meal", mealSchema)
module.exports = mealModel