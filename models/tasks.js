const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task:{type: String, required: true},
    subtasks:{type: [Object]},
    notes:{type: String},
    complete:{type: Boolean, default: false}
})

const Tasks = mongoose.model("Tasks", taskSchema)

module.exports = Tasks