let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    let para = document.getElementById("para")

    para.style.backgroundColor = "red";
    para.style.color = "white"
})

btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor = "green"
    btn.style.height = "50px"
    btn.style.width = "100px"
})

btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor = "blue";
    
})