let stopEl = document.getElementById("stop");
let readyEl = document.getElementById("ready");
let goEl = document.getElementById("go");
let redEl = document.getElementById("red");
let yellowEl = document.getElementById("yellow");
let greenEl = document.getElementById("green");


function stopfun(){
    stopEl.style.backgroundColor = "red";
    redEl.style.backgroundColor = "red";
    readyEl.style.backgroundColor = "#1d1c3f";
    yellowEl.style.backgroundColor = "rgb(73, 78, 102)"; 
    goEl.style.backgroundColor = "#1d1c3f";
    greenEl.style.backgroundColor = "rgb(73, 78, 102)";
}

function readyfun(){
    stopEl.style.backgroundColor = "#1d1c3f";
    redEl.style.backgroundColor = "rgb(73, 78, 102)";
    readyEl.style.backgroundColor = "yellow";
    yellowEl.style.backgroundColor = "yellow";    
    goEl.style.backgroundColor = "#1d1c3f";
    greenEl.style.backgroundColor = "rgb(73, 78, 102)";
}

function gofun(){
    stopEl.style.backgroundColor = "#1d1c3f";
    redEl.style.backgroundColor = "rgb(73, 78, 102)";
    readyEl.style.backgroundColor = "#1d1c3f";
    yellowEl.style.backgroundColor = "rgb(73, 78, 102)";    
    goEl.style.backgroundColor = "green";
    greenEl.style.backgroundColor = "green";
}

stopEl.addEventListener("click",stopfun);
readyEl.addEventListener("click",readyfun);
goEl.addEventListener("click",gofun);