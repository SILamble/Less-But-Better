import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import TaskContainer from "../../TaskContainer"
import AddBtn from "../../Addbtn"
import NewTaskForm from "../../NewTaskForm"



function Current() {

    //task states
    const [currentTasks, setCurrentTasks] = useState([{
      task:"",
      subtasks:[],
      complete:"",
      notes:"",
      _id:""
    }]);

    const [newTask, setNewTask] = useState([{
      task:"",
      subtasks:[],
      complete:"",
      notes:"",
      _id:""
    }]);;

      //handles inputs from form, and sets these to a newTask object
    function handleInputChange(event) {
      const { name, value } = event.target;
      setNewTask({...newTask, [name]: value})
    };

    //sends new task to API
    function handleFormSubmit(event) {
      event.preventDefault();
        API.createTask({
          task: newTask.task,
          subtasks: newTask.subTask,
          notes: newTask.notes
        })
          .then(res => console.log(newTask))
          .catch(err => console.log(err));
      
    };

    //populate component on loading
    useEffect(() => {
      API.getCurrentTasks()
      .then(res => setCurrentTasks(res.data))
      .catch(err => console.log(err));
    }, []);

        return (
          <div>
            <h1>Welcome to the current tasks page</h1>
              {currentTasks.map(tasks => {
                console.log("The sub tasks are", tasks.subtasks)
                  return (
                    <TaskContainer
                      key = {tasks._id}
                      task = {tasks.task}
                      complete = {String(tasks.complete)}
                      subtasks = {tasks.subtasks}
                      notes = {tasks.notes}
                      />
                  )
                })}
                <p></p>
                <AddBtn/>
                <NewTaskForm
                handleFormSubmit = {handleFormSubmit}
                handleInputChange = {handleInputChange}/>
          </div>
        );
  }
  
  export default Current;