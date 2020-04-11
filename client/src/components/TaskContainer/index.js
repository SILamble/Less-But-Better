import React from "react";
import SubTaskContainer from "../SubTaskContainer"
import Notes from "../Notes"

function TaskContainer({ 
    task, 
    _id,
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
    notes,
    stComplete,
    handleUpdate
}) {
    return (
        <div><h2>Task: {task}</h2>
        {/* <h2>Complete: {complete}</h2> */}
        <SubTaskContainer
        _id = {_id}
        subTask1 = {subTask1}
        st1Complete = {st1Complete}
        subTask2 = {subTask2}
        st2Complete = {st2Complete}
        subTask3 = {subTask3}
        st3Complete = {st3Complete}
        subTask4 = {subTask4}
        st4Complete = {st4Complete}
        subTask5 = {subTask5}
        st5Complete = {st5Complete}
        stComplete = {stComplete}
        handleUpdate = { handleUpdate}/>
        <Notes 
        notes = {notes}/>
        </div>
    );
  }
  
  export default TaskContainer;