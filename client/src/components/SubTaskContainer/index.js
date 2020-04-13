import React from "react";
import CompBtn from "../CompBtn"
import Completed from "../Completed"

function SubTaskContainer({ 
    task, 
    _id,
    complete, 
    subTask1,
    st1Complete, 
    subTask2,
    st2Complete,  
    subTask3,
    st3Complete,  
    subTask4,
    st4Complete,  
    subTask5,
    st5Complete,
    stComplete,
    handleUpdate
}) {
    return (
        <div><div><h3>{subTask1}</h3>
            {stComplete(st1Complete, 
            <CompBtn  
            handleUpdate = { handleUpdate}
            id = {_id}
            name = {"st1Complete"}
            value = {true}/>, 
            <Completed />)}
        </div>
        <div><h3>{subTask2}</h3>
            {stComplete(st2Complete,            
            <CompBtn  
            handleUpdate = { handleUpdate}
            id = {_id}
            name = {"st2Complete"}
            value = {true}/>, 
            <Completed />)}
        </div>
        <div><h3>{subTask3}</h3>
            {stComplete(st3Complete,            <CompBtn  
            handleUpdate = { handleUpdate}
            id = {_id}
            name = {"st3Complete"}
            value = {true}/>, 
            <Completed />)}
        </div>
        <div><h3>{subTask4}</h3>
            {stComplete(st4Complete,             <CompBtn  
            handleUpdate = { handleUpdate}
            id = {_id}
            name = {"st4Complete"}
            value = {true}/>, 
            <Completed />)}
        </div>
        <div><h3>{subTask5}</h3>
            {stComplete(st5Complete,             <CompBtn  
            handleUpdate = { handleUpdate}
            id = {_id}
            name = {"st5Complete"}
            value = {true}/>, 
            <Completed />)}
        </div>
        </div>

    );
}

export default SubTaskContainer;