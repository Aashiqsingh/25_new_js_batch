function changeColor(){
    let mydiv = document.getElementById("mydiv")

    let color = document.getElementById("color")

    console.log(color.value);

    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    mydiv.style.backgroundColor = color.value
    
}