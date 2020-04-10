import React, { useState, useEffect } from "react";
import API from "../../../utils/API";


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
          </div>
        );
  }
  
  export default Current;