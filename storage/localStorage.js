const setData = ()=>{
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")

    console.log("email...",email.value);
    console.log("password....",pass.value);
    

    localStorage.setItem("email",email.value)
    localStorage.setItem("password",pass.value)
    
}

const getData = ()=>{
    const output = document.getElementById("output")

    var email = localStorage.getItem("email")
    var password = localStorage.getItem("password")


    output.innerHTML = email + " " + password
}

const deleteData = ()=>{

    // localStorage.clear();
    localStorage.removeItem("email")
    localStorage.removeItem("password")
}