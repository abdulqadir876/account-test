import React, { useState } from 'react'
import Task from './Task';
import './style.css'

const Todolist = () => {
    const [taskName, setTaskName] = useState("");
    const [time, setTime] = useState("");
    const [usd, setUsd] = useState("");
    const [xml, setXml] = useState("");
   
    const [tasklist, setTasklist] = useState([])

    const addTask = ()=>{
        setTasklist([...tasklist, {task: taskName, time: time, usd:usd, xml:xml}]);
        // setTasklist([...tasklist, {task: taskName, time: time}]);
        setTaskName("");
        setTime("");
        setUsd("");
        setXml("");
      
    }
  
    return (
        <div className="" >
        <div className="section2 mt-5">
            <div className="text d-flex justify-content-between">
                 <h3 className="title text-white ml-3">My Accounts</h3>
            <div className="d-flex align-items-center">
                 <button className="btn btn-white text-white px-4 py-3 rounded-lg  btn-outline-primary">
                     SWITCH TO TESTNET</button>
                 <i class="fa fa-cog text-white" style={{fontSize:'30px', marginLeft:'10px'}} aria-hidden="true" ></i>
            </div>
            </div>

            <div className="add-button">
         
                 <button  style={{padding: '30px 60px'}}type="button"
                 class="btn    mt-3 " data-toggle="modal" data-target="#exampleModalLong"> 
                   <i class="fa fa-plus" style={{fontSize:'30px'}}></i> 
                 <br/>
                
                 Add Account
                </button>
            </div>
            
               


            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Create New Account</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <p className="ml-4 mt-1">Clean the previous history and add new account</p>
                <div class="modal-body">
                <div>
                    <input type="text"  className="form-control" placeholder="Account Name" id="task"  onChange={(e)=>{
                        setTaskName(e.target.value)
                    }}/>
                </div>

                <div>
                    <input type="text" className="form-control mt-3" placeholder="EURT"  id="time"  onChange={(e)=>{
                        setTime(e.target.value)
                    }}/>
                </div>
                <div>
                    <input type="text" className="form-control mt-3" placeholder="USD" id="usd"   onChange={(e)=>{
                        setUsd(e.target.value)
                    }}/>
                </div>
                <div>
                    <input type="text" className="form-control mt-3" placeholder="XML" id="xml"   onChange={(e)=>{
                        setXml(e.target.value)
                    }}/>
                </div>
                
        </div>
        <div class="modal-footer">
            <button className="btn btn-primary" onClick={addTask}>Add</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    </div>
    </div>


        
           

<div className="section d-flex flex-wrap justify-content-between" 
style={{}}>
           {tasklist.map((task)=>{
               return(
                   <div className="">
                       <Task  taskName={task.task} time={task.time} usd={task.usd} xml={task.xml}/>
                   </div>
               )
           })}
</div>

        </div>
    )
}

export default Todolist
