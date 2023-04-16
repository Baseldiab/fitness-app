const mongoose = require("mongoose")
const mealSchema = mongoose.Schema({
    mealName: {
        type:String,
        trim:true
    },
    meal:{
        type: Array,
        trim:true
        // carbs : ["rice", "potatoes", "sweet potato" ,"oats" ]
        // vegetables: ["zucchini", "pea" ,"okra", "green beans","broccoli" ]
        // protein : ["meat", "chicken", "fish" ,"tuna fish","egg"]
    },
    mealCatogery: {
        type:String,
        trim: true
        // "breakfast" , "launch" , "dinner"
    },
    
    price: {
        type: String,
        required: true
    }
},{
    timestamps:true
})
const mealModel = mongoose.model("Meal", mealSchema)
module.exports = mealModel