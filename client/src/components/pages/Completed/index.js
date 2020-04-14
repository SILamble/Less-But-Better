import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import TaskContainer from "../../TaskContainer"
import { withAuthorization } from "../../Session";
import "./style.css"

function Completed() {

  //task states
  const [completedTasks, setcompletedTasks] = useState([{
    task: "",
    subTask1: "",
    st1Complete: "",
    subTask2: "",
    st2Complete: "",
    subTask3: "",
    st3Complete: "",
    subTask4: "",
    st4Complete: "",
    subTask5: "",
    st5Complete: "",
    complete: "",
    notes: "",
    _id: ""
  }]);


  //function to check if a subtask is complete or not

  function stComplete(subTaskComplete, compBtn, Completed) {
    if (subTaskComplete === false) {
      return compBtn
    } else {
      return Completed
    }
  }

  //populate component on loading
  useEffect(() => {
    API.getCompletedTasks()
      .then(res => setcompletedTasks(res.data))
      .catch(err => console.log(err));
  }, [completedTasks]);

  function handleUpdate(id, name, value) {
    taskUpdate(id, { [name]: value })

  }
  function taskUpdate(id, data) {
    API.updateTask(id, data)
      .then(res => console.log("1 Task updated"))
      .then(res => compTaskData())
      .catch(err => console.log(err))
  }

  function compTaskData() {
    if (completedTasks.length > 0) {
      console.log(completedTasks.length)
      completedTasks.map(tasks => {
        let checkArray = [tasks._id, tasks.st1Complete, tasks.st2Complete, tasks.st3Complete, tasks.st4Complete, tasks.st4Complete];
        let compQ = checkArray.includes(false)
        if (compQ === false) {
          console.log("2 Top level task complete");
          setTimeout(taskUpdate(tasks._id, { complete: true }), 5000)
        } else console.log("3 Top level not yet complete")
      })
    }
    else console.log("There are no tasks to check")
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Completed Tasks</h1></div>

      {completedTasks.map(tasks => {
        return (
          <div className="taskCont" key={tasks._id}>
            <TaskContainer
              task={tasks.task}
              complete={String(tasks.complete)}
              subTask1={tasks.subTask1}
              st1Complete={tasks.st1Complete}
              subTask2={tasks.subTask2}
              st2Complete={tasks.st2Complete}
              subTask3={tasks.subTask3}
              st3Complete={tasks.st3Complete}
              subTask4={tasks.subTask4}
              st4Complete={tasks.st4Complete}
              subTask5={tasks.subTask5}
              st5Complete={tasks.st5Complete}
              notes={tasks.notes}
              _id={tasks._id}
              stComplete={stComplete}
              handleUpdate={handleUpdate}
            />
          </div>)
      })}
    </div>
  );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Completed);