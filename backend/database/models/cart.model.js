const mongoose = require("mongoose")
const cartSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    meals: [
        {
        mealId: {
            type: String,
        }
        }
    ],
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
module.exports = cartModel