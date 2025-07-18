const express = require("express")
const { login, signUp } = require("../controllers/auth.controller")
const router = express.Router()





router.post ("/signUP" , signUp)


router.post ("/login", login)



module.exports = router


