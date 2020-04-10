import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import TaskContainer from "../../TaskContainer"


function Current() {

    //task states
    const [currentTasks, setCurrentTasks] = useState([{
      task:"",
      subtask:[],
      complete:"",
      notes:"",
      _id:""
    }]);

    //populate component on loading
    useEffect(() => {
      API.getCurrentTasks()
      .then(res => setCurrentTasks(res.data))
      .catch(err => console.log(err));
    }, []);

    console.log("Current tasks:");
    console.log(currentTasks)

        return (
          <div>
            <h1>Welcome to the current tasks page</h1>
              {currentTasks.map(tasks => {
                  return (
                    <TaskContainer
                      key = {tasks._id}
                      task = {tasks.task}
                      complete = {tasks.complete}
                      />
                  )
                })}
          </div>
        );
  }
  
  export default Current;