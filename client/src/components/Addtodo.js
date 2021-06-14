import React, { useState } from 'react'
import axios from 'axios' 

export default function Addtodo() { 
    const [Todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

         axios.post('http://localhost:5000/add', {todo : Todo})
         .then(res => { 
             if(res.status === 201){
                //  alert("Todo created sucessfully")
                 window.location.reload()
             }else{
                 alert("Request failed.... try again....")
             }
         })
         .catch(err => alert(err.response.data.message))
    }
    
    return (
        <>
           <div className="container">
               <form onSubmit={handleSubmit}>
                <div className="input-group mb-5 mt-5">
                  <input 
                       type="text" 
                       className="form-control"
                       placeholder="Add new To-Do" 
                       aria-label="Add new To-Do" 
                       aria-describedby="button-addon2"
                       onChange={(e) => setTodo(e.target.value)}
                       required/>
                  <button 
                      className="btn btn-outline-secondary" 
                      type="submit" 
                      id="button-addon2">ADD</button>
                </div>
               </form>
           </div> 
        </>
    )
}
