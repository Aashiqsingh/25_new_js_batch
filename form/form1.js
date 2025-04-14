const submitHandler = (event)=>{

    event.preventDefault();
    // alert("form submitted...")

    const nameErr = document.getElementById("nameErr")
    const ageErr = document.getElementById("ageErr")
    const mobileErr = document.getElementById("mobileErr")


    const name = document.getElementById("name")
    const age = document.getElementById("age")
    const mobile = document.getElementById("mobile")

    if(name.value == "")
    {
        // alert("Name is required..")
        nameErr.innerHTML = "Name is required.."
        nameErr.style.color = "red"
    }
    else if(name.value.length < 4)
    {
        nameErr.innerHTML = "Name is too short.."
        nameErr.style.color = "red"
    }
    else{
        nameErr.innerHTML = name.value
        nameErr.style.color = "green"
    }


    if(age.value < 18)
    {
        ageErr.innerHTML = "You r not eligible."
    }
    else{
        ageErr.innerHTML = "You are eligible"
        ageErr.style.color = "green"
    }

    if(mobile.value == "")
    {
        mobileErr.innerHTML = "Number is required..";
        mobileErr.style.color = "red"
    }
    else if(mobile.value.length !== 10)
    {
        mobileErr.innerHTML = "Mobile number is invalid.."
        mobileErr.style.color = "red"
    }else{
        mobileErr.innerHTML = mobile.value
        mobileErr.style.color = "green"
    }

    // console.log("name = ",name.value);
    // console.log("Age = ",age.value);


    // console.log(name.value + " " + age.value);

    const ans = document.getElementById("ans")

    const user = {
        name:name.value,
        age:age.value,
        mobile:mobile.value
    }

    // console.log(user);
    // ans.innerHTML = user 
    const output = JSON.stringify(user)
    ans.innerHTML = output

    console.log(output[0]);
    
    
    



    console.log("form submitted..");
    
}