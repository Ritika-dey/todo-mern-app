import React, { useEffect, useState } from 'react'
import Pie from './Pie'
import axios from 'axios'; 

export default function Vizualise() {
    const [data, setdata] = useState([])
    const [isEmpty, setisEmpty] = useState(false) 
    const [com, setcom] = useState(0)
    const [Pending, setpending] = useState(0)

    var completed = 0;
    var not_completed = 0; 
    const height = window.innerHeight*(3/4)
    const width = window.innerWidth*(3/4)

    const generateData = () =>{ 
        axios.get('http://localhost:5000/userdata')
        .then(res => {
            res.data.map(obj => {
                if(obj.completed === true) completed += 1;
                else not_completed += 1;
                return 0;
            })  
            setcom(completed)
            setpending(not_completed)
            if(completed || not_completed) setdata([not_completed, completed]) 
            else setisEmpty(true)
               
        })
        .catch(err => console.log(err)) 
     }

    useEffect(() =>{
        generateData()
    },[])
    
    if(isEmpty) return <h1 className="home-text text-center">Yeahhh ...!! No Work<span style={{fontSize:"100px"}}> &#128522;</span></h1> 
    return (
        <>  
            <h1 className="home-text text-center">Data visualization</h1> 
            <div className="container labels">
                <i className="completed fa fa-square"></i><span>&nbsp; Pending ({Pending})&nbsp;&nbsp;</span>
                <i className="notCompleted fa fa-square"></i><span>&nbsp; Completed ({com})</span>
            </div>
            
            <svg height={height} width={width} style={{border:"solid rgba(194,189,188, 0.5)", display:"block" , margin:"0 auto"}}>
               <Pie 
                  data = {data} 
                  x ={width/2} 
                  y ={height/2} />
            </svg>
        </>
    )
}
