import React from "react";

function SubTaskContainer({ subtasks}) {
    console.log("these are the subtasks the container is receiving:", subtasks)
    return (
        <div><h2>Sub Task:{console.log(subtasks)}</h2>
        <br></br>
        <h2>Complete:</h2>
        </div>
    );
  }
  
  export default SubTaskContainer;