const router = require("express").Router()
const mealController = require("../app/controller/meal.controller")
const {authAdmin, authUser} = require("../app/middleware/auth.middleware")

module.exports = router