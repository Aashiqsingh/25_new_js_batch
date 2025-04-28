
let mydiv = document.getElementById("mydiv")

function changeColor(){

    let color = document.getElementById("color")

    console.log(color.value);

    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    mydiv.style.backgroundColor = color.value
    mydiv.style.margin = "100px 400px"
    mydiv.style.outline = "10px dotted "+ color.value
    
}


const changeShape = ()=>{

    const shape = document.getElementById("shape")
    console.log(shape.value);

    mydiv.style.borderRadius = shape.value
    
}