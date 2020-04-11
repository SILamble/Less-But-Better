import React from "react";

function SubTaskContainer({ subtasks}) {
    console.log("these are the subtasks the container is receiving:", subtasks)
    return (
        <div><h3>Sub Task:{console.log(subtasks)}</h3>
        <h4>Complete:</h4>
        </div>
    );
  }
  
  export default SubTaskContainer;