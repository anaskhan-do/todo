const express = require("express")
const { createUser, getUser, updateUser, deleteUser } = require("../controllers/user.controller")


const router = express.Router()




router.post("/createUser", createUser)

router.get ("/getUser" , getUser)

router.put ("/updateUser" , updateUser)

router.delete ("/deleteUser" , deleteUser)





module.exports = router





