const router = require("express").Router()
const mealController = require("../app/controller/meal.controller")
const { authAdmin, authUser } = require("../app/middleware/auth.middleware")
// =================================================
router.post("/add", authAdmin,mealController.add)
// =================================================
router.get("/", authAdmin, mealController.all)
router.get("/single/:id",authAdmin, mealController.single)
// ==================================================
router.delete("/",authAdmin,mealController.delAll)
router.delete("/single/:id",authAdmin, mealController.delSingle)
// ==================================================
router.patch("/single/:id",authAdmin, mealController.editSingle)

module.exports = router