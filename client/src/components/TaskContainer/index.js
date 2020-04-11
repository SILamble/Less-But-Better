import React from "react";
import SubTaskContainer from "../SubTaskContainer"
import Notes from "../Notes"

function TaskContainer({ task, complete, subtasks, notes }) {
    return (
        <div><h2>Task: {task}</h2>
        {/* <h2>Complete: {complete}</h2> */}
        <SubTaskContainer
        subtasks = {subtasks}/>
        <Notes 
        notes = {notes}/>
        </div>
    );
  }
  
  export default TaskContainer;