document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form1')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
    })
})

var myList = []

function listAdd(){
    myList.push(document.getElementById('input1').value);
    var list = document.getElementById('taskList')
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(document.getElementById('input1').value));
    list.appendChild(entry);
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    document.getElementById('input1').value = ""
  
}

function populatePage(){
    myList.forEach((item)=>{
        let List = document.getElementById('taskList'); 
        List.innerHTML = "<li id = task1> Hello </li>"
      })
    }
function clear(){
    myList.list = [];
    document.getElementById("taskList").innerHTML = ""

}

function delTask(){
myList.splice(0,1)
var list = document.getElementById('taskList')
let entry = document.createElement('li'); 
document.getElementById("taskList").innerHTML = "" 
for (i = 0; i < myList.length; i++){
    entry.appendChild(document.createTextNode(""));
    entry.appendChild(document.createTextNode(myList[i]));
    list.appendChild(entry);
}  

//list.parentNode.removeChild(item)

}



let btnAdd = document.querySelector('#buttonAdd');
btnAdd.addEventListener("click", listAdd);

let btnClear = document.querySelector('#buttonClear');
btnClear.addEventListener("click", clear);

let btnDel = document.querySelector('#buttonDel');
btnDel.addEventListener("click", delTask);

console.log(myList)