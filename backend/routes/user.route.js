const router = require("express").Router()
const userController = require("../app/controller/user.controller")
const {authAdmin, authUser} = require("../app/middleware/auth.middleware")
const upload = require("../app/middleware/upload.middleware")
// =================================================
router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/logout", authUser, userController.logOut)
router.post("/logoutAll",authAdmin, userController.logOutAll)
// =================================================
router.get("/", authAdmin, userController.all)
router.get("/single/:id", userController.single)
router.get("/me", authUser, userController.profile)
// ==================================================
router.delete("/",authAdmin,userController.delAll)
router.delete("/single/:id",authUser, userController.delSingle)
// ==================================================
router.patch("/single/:id",authUser, userController.editSingle)
router.patch("/updatePImg", authAdmin, upload.single("img"), userController.updatePimg)
// ==================================================

module.exports = router