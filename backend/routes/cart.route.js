const router = require("express").Router()
const cartController = require("../app/controller/cart.controller")
const { authAdmin, authUser } = require("../app/middleware/auth.middleware")
// =================================================
router.post("/add", authAdmin,cartController.add)
// =================================================
router.get("/", authUser, cartController.all)
router.get("/single/:id",authUser, cartController.single)
// ==================================================
router.delete("/",authAdmin,cartController.delAll)
router.delete("/single/:id",authUser, cartController.delSingle)
// ==================================================
router.patch("/single/:id",authUser, cartController.editSingle)

module.exports = router