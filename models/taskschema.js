var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema ({
    text: String,
    done: Boolean
});

var tasks = mongoose.model('tasks', taskSchema);

module.exports = tasks;