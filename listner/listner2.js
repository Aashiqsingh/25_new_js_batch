let box = document.getElementsByClassName("box")
console.log(box);

box[0].addEventListener("click",()=>{
    box[2].style.borderRadius = "50%"
})



var colors = ["red","green","blue","yellow","orange","pink","purple"]
box[3].addEventListener("mousemove",()=>{

    let randomIndex = Math.floor(Math.random() * colors.length)

    box[1].style.backgroundColor = colors[randomIndex]
})

box[3].addEventListener("mouseleave",()=>{
    box[2].style.borderRadius = "0px"
})