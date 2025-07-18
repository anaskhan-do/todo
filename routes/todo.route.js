const express = require("express")
const { updateTodo, createTodo, getTodo, deleteTodo } = require("../controllers/todo.controller")



const router = express.Router()



router.post ("/createTodo" , createTodo)

router.get ("/getTodo" , getTodo)

router.put ("/updateTodo", updateTodo)

router.delete ("/deleteTodo" , deleteTodo)



module.exports = router























