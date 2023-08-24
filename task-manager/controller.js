const http = require("http");
let taskArray = [];

const addTask = (task) => {
    taskArray.push(task);
}

const showTasks = () =>{
    console.log(taskArray);
}


module.exports = {addTask, showTasks};
