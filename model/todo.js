const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
       
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
