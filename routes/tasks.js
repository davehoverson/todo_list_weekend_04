var express = require('express');
var router = express.Router();
var taskSchema = require('../models/taskschema');

router.get('/getTask', function(req, res, next){
    taskSchema.find(function(err, task){
            res.json(task);
    })
});

router.post('/addTask', function(req, res, next){
    console.log(req.body);
    taskSchema.create(req.body, function(err, post){
            res.sendStatus(200);
    })
});

router.post('/editTask', function(req, res, next){
        taskSchema.findById(req.body._id, function (err, task) {
            if (err) throw err;
            console.log("editing task: " + task);
            task.done = req.body.done;
            task.save(function (err) {
                if (err) throw err;
                res.sendStatus(200);
            })
        })
});

router.delete('/deleteDone', function(req, res, next) {
    taskSchema.remove({done: true}, function() {
        console.log('Object successfully deleted!');
    });
    res.sendStatus(200);
});


module.exports = router;