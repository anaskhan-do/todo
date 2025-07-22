const express = require("express")
const { login, signUp } = require("../controllers/auth.controller")
const signUpMiddleware = require("../middleware/signupmiddleware")
const loginMiddleware = require("../middleware/loginmiddleware")

const router = express.Router()





router.post ("/signUp",signUpMiddleware, signUp)


router.post ("/login",loginMiddleware, login)



module.exports = router


