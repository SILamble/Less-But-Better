import React from "react";
import SubTaskContainer from "../SubTaskContainer"
import Notes from "../Notes"

function TaskContainer({ 
    task, 
    _id,
    complete, 
    subTask1, 
    subTask2 , 
    subTask3, 
    subTask4, 
    subTask5, 
    notes 
}) {
    return (
        <div><h2>Task: {task}</h2>
        {/* <h2>Complete: {complete}</h2> */}
        <SubTaskContainer
        _id = {_id}
        subTask1 = {subTask1}
        subTask2 = {subTask2}
        subTask3 = {subTask3}
        subTask4 = {subTask4}
        subTask5 = {subTask5}/>
        <Notes 
        notes = {notes}/>
        </div>
    );
  }
  
  export default TaskContainer;