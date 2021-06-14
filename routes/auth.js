const express = require('express');
const router = express.Router();

require('../database/conn')
const Addtodo = require('../model/schema');

// add todo
router.post('/add', async (req, res) => {
    const {todo} = req.body;
    
    if(!todo){
        return res.status(401).send('Empty fields not allowed')
    }
    const todoExist = await Addtodo.findOne({todo : todo});
    if(todoExist){
        return res.status(401).send({ message : "Todo already exist..."})
    }

    // creating new document
    const newtodo = new Addtodo({todo})
    try{
        const result = await newtodo.save();

        if(result){
            return res.status(201).send({
                message : "Todo created succesfully",
                data : req.body
            })
        } else {
            return res.status(500).send("Failed to create todo")
        }

    } catch (err) {
        console.log(`Error : ${err}`)
    }
})

router.put('/update', async (req, res) =>{
    const {todo_name} = req.body
    const data = await Addtodo.findOne({todo : todo_name}) //getting id of particular todo
     
    try{
        const updated = await Addtodo.updateOne({_id : data._id},{ completed : !data.completed });
        if(updated){
            res.status(200).send({message : "Completed"})
        }
        else{
            res.status(500).send({message : "Updation failed"})
        }
    } catch(err){
        console.log(`error : ${err}`)
    }
})


router.delete('/delete', async (req, res) =>{
    const {todo_name} = req.body 
    const data = await Addtodo.findOne({todo : todo_name}) //getting id of particular todo
 
    try{
        const deleted = await Addtodo.deleteOne({_id : data._id});
        if(deleted){
            res.status(200).send({message : "Deleted successfully"})
        }
        else{
            res.status(500).send({message : "Deletion failed"})
        }
    } catch (err) {
        console.log(err)
    }
})


router.get('/userdata', async (req, res) =>{
    const data = await Addtodo.find() 
    res.send(data)
})

module.exports = router;