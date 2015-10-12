var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var taskSchema = require('../models/taskschema');

router.get('/getTask', function(req, res, next){
    taskSchema.find(function(err, task){
            res.json(task);
    })
});

router.post('/addTask', function(req, res, next){
    console.log(req.body);
    taskSchema.create(req.body, function(err, post){
            res.send('all good');
    })
});

router.post('/editTask', function(req, res, next){
    var body = req.body;
    taskSchema.findById(body._id, function(err, task) {
        if (err) throw err;
        task.done = true;
        task.save(function(err){
            if(err) throw err;
            res.sendStatus(200);
        })
    })
});

//router.delete('/deleteTask', function(req, res, next){
//
//});

module.exports = router;