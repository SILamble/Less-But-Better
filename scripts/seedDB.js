const mongoose = require("mongoose");
const db = require("../models");

// This file empties the tasks collection and inserts the tasks below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://dbUser:jdo8JVUfCASizUSq@lbb-szaqz.mongodb.net/test?retryWrites=true&w=majority"
);

const taskSeed = [
  {
    task: "Go food shopping",
  
    subtasks:[
      {
      subTask:"Plan meals",
      complete: false
    },
    {
      subTask:"List ingredients",
      complete: false
    },
    {
      subTask:"Check cupboards",
      complete: false
    },
    {
      subTask:"Write list",
      complete: false
    },
    {
      subTask:"Go to shops",
      complete: false
    }
  ],
  notes:"This is an example of a possible task, that has been broken down into sub-tasks",
  complete:false
  }
];

db.Tasks.remove({})
  .then(() => db.Tasks.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // task info for testing api routes

  // {
  //   "task": "Go food shopping",
  
  //   "subtasks":[
  //     {
  //     "subTask":"Plan meals",
  //     "complete": false
  //   },
  //   {
  //     "subTask":"List ingredients",
  //     "complete": false
  //   },
  //   {
  //     "subTask":"Check cupboards",
  //     "complete": false
  //   },
  //   {
  //     "subTask":"Write list",
  //     "complete": false
  //   },
  //   {
  //     "subTask":"Go to shops",
  //     "complete": false
  //   }
  // ],
  // "notes":"This is an example of a possible task, that has been broken down into sub-tasks",
  // "complete":false
  // }