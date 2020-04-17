const db = require("../models")

module.exports ={
    //find all tasks, where main task is incomplete
    findAllCurrent: function (req, res) {
        db.Tasks.find({complete: false})
        .then(dbTasks => res.json(dbTasks))
        .catch(err => res.status(422).json(err))
    },
    //find all tasks, where main task is complete
    findAllCompleted: function (req, res) {
        db.Tasks.find({complete: true})
        .then(dbTasks => res.json(dbTasks))
        .catch(err => res.status(422).json(err))
    },

    create: function (req, res){
        //create a task, with data from req.body
        db.Tasks.create(req.body)
        .then(dbTasks => res.json(dbTasks))
        .catch(err => res.status(422).json(err)) 
    }, 

    update: function (req, res){
        //find a task, by its automatically generate id, passed via
        // params.id and update with the data from req.body
        db.Tasks.findOneAndUpdate({_id: req.params}, req.body)
        .then(dbTasks => res.json(dbTasks))
        .catch(err => res.status(422).json(err)) 
    }

}