console.log('My code is running')
var toDoList = ["task 1", "task 2"];


let btn = document.querySelector('#buttonAdd');
let myList = document.getElementById('list');
 


toDoList.forEach((item)=>{
  let myList = document.getElementById('list'); 
  let li = document.createElement("li");
  li.innerText = item;
  myList.appendChild(li);
})

function addtask() ->{
    toDoList.forEach((item)





}







