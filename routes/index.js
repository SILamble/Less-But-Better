const router = require("express").Router()
const taskController = require("../controllers/taskController")
const path = require("path")

//routes for new, current incomplete tasks

router.route("/current")
.get(taskController.findAllCurrent)
.post(taskController.create);

//routes for finding complete tasks
 router.route("/completed")
 .get(taskController.findAllCompleted);

 //routes for updating tasks
 router.route("/current/:id")
 .put(taskController.update);

 // For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

 module.exports = router