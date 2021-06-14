import React, { useEffect, useState } from 'react'
import Addtodo from './Addtodo'
import TodoContainer from './TodoContainer' 
import axios from 'axios'

export default function Todo() {
      
    const [UserData, setUserData] = useState([])

    const getTodoData = async () =>{
        try{
        const tododata = await axios.get('http://localhost:5000/userdata')
        if(tododata){
             setUserData(tododata.data)
        }}catch(err){ 
            console.log(err)
        }
    }

    useEffect(() => {
       getTodoData();
    }, []);

    const handleCompleted = (e) => { 
        axios.put('http://localhost:5000/update',{todo_name : e.target.value})
        .then(res =>{
            // console.log(res)   
            // alert(res.data.message)
            window.location.reload(); 
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (e) =>{
        console.log(e.target.value)
        axios.delete('http://localhost:5000/delete',{data : {todo_name : e.target.value}})
        .then(res =>{
            // console.log(res)
            // alert(res.data.message)
            window.location.reload(); 
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <Addtodo /> 
            <TodoContainer 
                UserData={UserData}
                handleCompleted={handleCompleted}
                handleDelete={handleDelete}/> 
        </>
    )
}
