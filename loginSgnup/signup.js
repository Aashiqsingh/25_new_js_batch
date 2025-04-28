const signup = (event) =>{
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const age = document.getElementById("age");


    const user = {
        name:name.value,
        email:email.value,
        pass:pass.value,
        age:age.value
    }

    console.log(user);

    localStorage.setItem("email",email.value)
    localStorage.setItem("pass",pass.value)

    location.href = "./login.html"
    alert("signup successfully...")
    
}

const login = ()=>{

    const userLoginEmail = document.getElementById("email")
    const userLoginPass = document.getElementById("password")


    const signupEmail = localStorage.getItem("email");
    const signupPass = localStorage.getItem("pass")

    if(userLoginEmail.value === signupEmail && userLoginPass.value === signupPass)
    {
        alert("Login Successfully....")
    }
    else{
        alert("Invalid credential...")
    }





    // console.log("user loin email....",userLoginEmail.value);
    // console.log("user loin password....",userLoginPass.value);

    
}