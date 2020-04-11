const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task:{type: String, required: true},
    subTask1:{type: String, required: true},
    st1Complete:{type: Boolean, default: false},
    subTask2:{type: String, required: true},
    st2Complete:{type: Boolean, default: false},
    subTask3:{type: String, required: true},
    st3Complete:{type: Boolean, default: false},
    subTask4:{type: String, required: true},
    st4Complete:{type: Boolean, default: false},
    subTask5:{type: String, required: true},
    st5Complete:{type: Boolean, default: false},
    notes:{type: String},
    complete:{type: Boolean, default: false}
})

const Tasks = mongoose.model("Tasks", taskSchema)

module.exports = Tasks