const express = require("express")
const { updateTodo, createTodo,  deleteTodo, getAllTodo } = require("../controllers/todo.controller")
const authMiddleware = require("../middleware/authmiddleware")
const cMiddlewareTodo = require("../middleware/cMiddlewaretodo")



const router = express.Router()



router.post ("/createtodo",  [authMiddleware , cMiddlewareTodo ], createTodo)

router.get ("/getAllTodo/:id", authMiddleware , getAllTodo)

router.put ("/updateTodo/:id", updateTodo)

router.delete("/deleteTodo/:id" , deleteTodo)



module.exports = router























