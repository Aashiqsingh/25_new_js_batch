function text(){
    const txt = document.getElementById("txt");
    // console.log(txt.value);
    const output = document.getElementById("output");


    if(txt.value.length < 5)
    {
        // alert("Name is too short..")
        output.innerHTML = "Name is too short.."
        output.style.color = "red";
        txt.style.outline = "2px solid red";
    }
    else{
        output.innerHTML = txt.value
        output.style.color = "green";
        txt.style.outline = "2px solid green";
    }




    // output.innerHTML = txt.value
    
}

function change(){
    // alert("change...")
    console.log("change..");
    
}