const mongoose = require("mongoose")
// const validator = require("validator")
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
const mealSchema = mongoose.Schema({
    mealName: {
        type:String,
        trim:true
    },
    meal:{
        type:String,
        trim:true
        // carbs : ["rice", "potatoes", "sweet potato" ,"oats" ]
        // vegetables: ["zucchini", "pea" ,"okra", "green beans","broccoli" ]
        // protein : ["meat", "chicken", "fish" ,"tuna fish","egg"]
    },
    mealCatogery: {
        type:String,
        trim: true
        // breakfast , launch , dinner
    },
    
    price: {
        type: Number,
        required: true
    }
},{
    timestamps:true
})
const mealModel = mongoose.model("Meal", mealSchema)
module.exports = mealModel