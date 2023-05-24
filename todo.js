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


let btnAdd = document.querySelector('#buttonAdd');
btnAdd.addEventListener("click", listAdd);

let btnClear = document.querySelector('#buttonClear');
btnClear.addEventListener("click", clear);

console.log(myList)