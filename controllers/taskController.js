const db = require("../models")

module.export ={
    //find all tasks, by the req.query. 
    // search parameter, i.e complete true or false will come from the req.query
    findAll: function (req, res) {
        db.Tasks.find(req.query)
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
        db.Tasks.findOneAndUpdate({id: req.params.id}, req.body)
        .then(dbTasks => res.json(dbTasks))
        .catch(err => res.status(422).json(err)) 
    }

}