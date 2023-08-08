let inputbox = document.getElementById("input-box");
let listcontiner = document.getElementById("list-container");

function adddata(){
    if(inputbox.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
}
listcontiner.addEventListener("click" , function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
