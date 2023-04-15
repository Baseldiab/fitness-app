const router = require("express").Router()
const userController = require("../app/controller/user.controller")
const {authAdmin, authUser} = require("../app/middleware/auth.middleware")
// =================================================
router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/logout", authUser, userController.logOut)
router.post("/logoutAll",authAdmin, authUser, userController.logOutAll)
// =================================================
router.get("/", authUser, userController.all)
router.get("/single/:id", userController.single)
router.get("/me", authUser, userController.profile)
// ==================================================
router.delete("/",authAdmin,userController.delAll)
router.delete("/single/:id", userController.delSingle)
// ==================================================
router.patch("/single/:id",authUser, userController.editSingle)

module.exports = router