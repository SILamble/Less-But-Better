import React from "react";

function TaskContainer({ task, complete }) {
    return (
        <div><h2>Task: {task}</h2>
        <br></br>
        <h2>Complete: {complete}</h2>
        </div>
    );
  }
  
  export default TaskContainer;