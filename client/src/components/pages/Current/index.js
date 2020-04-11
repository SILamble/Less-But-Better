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

    const [updatedTask, setUpdatedTask] = useState({
      id:"",
      name:""
    })

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

    //function to check if a subtask is complete or not

    function stComplete(subTaskComplete, compBtn, Completed){
      if (subTaskComplete === false){
        return compBtn
      } else {
        return Completed
      }
    }

    //populate component on loading
    useEffect(() => {
      API.getCurrentTasks()
      .then(res => setCurrentTasks(res.data))
      .catch(err => console.log(err));
    }, []);

    function handleUpdate(id, name, value){
      taskUpdate(id, {[name]:value})

    }

    function taskUpdate(id, data){
      console.log("The id being updated is", id);
      console.log("This is the data being updated", data)
      API.updateTask(id, data)
      .then(res => console.log("Task updated"))
      .catch(err => console.log(err));
    }

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
                      st1Complete = {tasks.st1Complete}
                      subTask2 = {tasks.subTask2}
                      st2Complete = {tasks.st2Complete}
                      subTask3 = {tasks.subTask3}
                      st3Complete = {tasks.st3Complete}
                      subTask4 = {tasks.subTask4}
                      st4Complete = {tasks.st4Complete}
                      subTask5 = {tasks.subTask5}
                      st5Complete = {tasks.st5Complete}
                      notes = {tasks.notes}
                      _id = {tasks._id}
                      stComplete = {stComplete}
                      handleUpdate = { handleUpdate}
                      />
                  )
                })}
                <h1>Add a new task here!</h1>
                {/* <AddBtn/> */}
                <NewTaskForm
                handleFormSubmit = {handleFormSubmit}
                handleInputChange = {handleInputChange}/>
          </div>
        );
  }
  
  export default Current;