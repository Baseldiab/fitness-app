const router = require("express").Router()
const userController = require("../app/controller/user.controller")
const auth = require("../app/middleware/auth.middleware")


router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/logout", auth, userController.logOut)
router.post("/logoutAll", auth, userController.logOutAll)

router.get("/", auth, userController.all)
router.get("/single/:id", userController.single)
router.get("/me", auth, userController.profile)

router.delete("/", userController.delAll)
router.delete("/single/:id", userController.delSingle)

router.patch("/single/:id", userController.editSingle)



module.exports = router