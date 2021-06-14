const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({ 
    todo : {
        type : String, 
        require
    },
    completed : {
        type : Boolean,
        default : false
    },
    time : {
        type : Date,
        default : Date.now()
    } 
})

module.exports = new mongoose.model('todo', todoSchema);