const express = require("express")
const { updateTodo, createTodo, getTodo, deleteTodo } = require("../controllers/todo.controller")



const router = express.Router()



router.post ("/createTodo" , createTodo)

router.get ("/getTodo" , getTodo)

router.put ("/updateTodo/:id", updateTodo)

router.delete("/deleteTodo/:id" , deleteTodo)



module.exports = router























