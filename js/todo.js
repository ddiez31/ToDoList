// Creation nouvelle liste sur appui bouton okay
function newElement() {
    var list = document.createElement("list");
    var input = document.getElementById("newInput").value;
    var tempo = document.createTextNode(input);
    list.appendChild(tempo);
    document.getElementById("todo").appendChild(list);
    document.getElementById("newInput").value = "";
    todo.innerHTML = input;
    console.log(tempo);
   
}


