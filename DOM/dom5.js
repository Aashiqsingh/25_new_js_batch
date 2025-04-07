
var a = 0;

var colors = ["red", "green", "blue", "violet", "yellow", "orange", "skyblue"]
// console.log(colors[0]);

function changeColor(){
    // console.log("hello..");
    // console.log(a++);

    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);

    let mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = colors[randomIndex]
    
    
    
}