const Todo = require("../model/todo")
const User = require("../model/User")



const createTodo = async (request, response) => {
  try {
    const { title, description } = request.body;
    
    console.log(request.user);

    const user = await User.findById(request.user.id); 
   

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    const newTodo = new Todo({
      title,
      description,
      user: {
       _id :  user._id
     }
    });

   const sv =  await newTodo.save();

    return response.status(201).json({
      message: "Todo created successfully",
      todo: sv
    });

  } catch (error) {
    return response.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
};





const getAllTodo = async (request, response) => {
    
  try {
    
const id = request.params.id





















  } catch (error) {
    return response.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
};












const updateTodo = (request, response) => {

}


const deleteTodo = (request, response) => {

}


module.exports = {
    createTodo,
    getAllTodo,
    updateTodo,
    deleteTodo
}





