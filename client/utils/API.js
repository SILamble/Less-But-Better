import axios from "axios";

export default { 
    //get all current tasks via api/current route
    getCurrentTasks: function(){
        return axios.get("api/current")
    },
    //get all complete tasks via api/completed route
    getCompletedTasks: function(){
        return axios.get("api/completed")
    },
    //create a task via api/current route, and passing taskData
    createTask: function(taskData) {
        return axios.post("api/current", taskData)
    },
    //update a task via api/current route, find it by the id, and update using the updateData passed to it
    updateTask: function(id, updateData){
        return axios.put("api/current/" + id, updateData)
    }
}