import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import TaskContainer from "../../TaskContainer"
import AddBtn from "../../Addbtn"
import NewTaskForm from "../../NewTaskForm"



function Current() {

    //task states
    const [currentTasks, setCurrentTasks] = useState([{
      task:"",
      subTask1:"",
      st1Complete:"",
      subTask2:"",
      st2Complete:"",
      subTask3:"",
      st3Complete:"",
      subTask4:"",
      st4Complete:"",
      subTask5:"",
      st5Complete:"",
      complete:"",
      notes:"",
      _id:""
    }]);

    const [newTask, setNewTask] = useState([{
      task:"",
      subTask1:"",
      st1Complete:"",
      subTask2:"",
      st2Complete:"",
      subTask3:"",
      st3Complete:"",
      subTask4:"",
      st4Complete:"",
      subTask5:"",
      st5Complete:"",
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
          subTask1: newTask.subTask1,
          subTask2: newTask.subTask2,
          subTask3: newTask.subTask3,
          subTask4: newTask.subTask4,
          subTask5: newTask.subTask5,
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
                  return (
                    <TaskContainer
                      key = {tasks._id}
                      task = {tasks.task}
                      complete = {String(tasks.complete)}
                      subTask1 = {tasks.subTask1}
                      subTask2 = {tasks.subTask2}
                      subTask3 = {tasks.subTask3}
                      subTask4 = {tasks.subTask4}
                      subTask5 = {tasks.subTask5}
                      notes = {tasks.notes}
                      />
                  )
                })}
                <p></p>
                {/* <AddBtn/> */}
                <NewTaskForm
                handleFormSubmit = {handleFormSubmit}
                handleInputChange = {handleInputChange}/>
          </div>
        );
  }
  
  export default Current;