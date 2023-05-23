console.log('My code is running')
let toDoList = [];
function addTaskToList(newTask, list) {
    console.log(list.concat(newTask))
    return list.concat(newTask) 
}

// console.log(toDoList)
// toDoList = addTaskToList("say goodbuy", toDoList)