const express = require("express")
const app = express()

require("../database/connection")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// ===========================================================
// ROUTES
const userRoutes = require("../routes/user.route")
app.use("/fit/user", userRoutes) //localhost:3000/fit/user => inside routes
// ============================
const mealRoutes = require("../routes/meal.route")
app.use("/fit/meal", mealRoutes) //localhost:3000/meal/user => inside routes
// ============================
const cartRoutes = require("../routes/cart.route")
app.use("/fit/cart", cartRoutes) //localhost:3000/cart/user => inside routes
// ===========================================================

app.all("*", (req,res)=> 
    res.status(404).send({ apiStatus: false, data:null, message:"invalid url" })
)

module.exports = app
