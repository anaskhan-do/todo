const mongoose = require('mongoose');
const User = require('./User');

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
    completed: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User , // references the User model
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
