import React from 'react' 
import {motion} from 'framer-motion'

function TodoContainer(props) { 
    return ( 
        <motion.div 
            transition={{ ease: "easeOut", duration: 2 }}
        >
            {
                props.UserData.map(data => {  
                    const check = data.completed ? 1 : 0
                    return (
                        <div className="container" key={data._id}>
                           <div className="todo-container border border-dark mb-3 mt-2 rounded"> 
                            <div className="row m-3">
                                    <div className="todo=check col-md-3 col-sm-3 col-xs-3">
                                        <input 
                                           className="form-check-input mt-0" 
                                           type="checkbox" 
                                           checked={check}
                                           value={data.todo} 
                                           aria-label="Checkbox"
                                           style={{'width':'30px', 'height':'30px'}}
                                           onClick={props.handleCompleted}/>
                                    </div>
                                    
                                    <div className="todo-text col-md-8 col-sm-8 col-xs-8">
                                        <h4 className= "ml-5">{data.todo}</h4>
                                    </div>
                                    
                                    <div className="todo-del col-md-1 col-sm-1 col-xs-1">
                                        <button value={data.todo} className="fa fa-trash fs-4" onClick={props.handleDelete}></button>
                                    </div>
                            </div>
                           </div>
                        </div>
                    )
                })
            }
        </motion.div>
    )
}

export default TodoContainer
