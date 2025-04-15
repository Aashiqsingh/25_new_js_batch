const submitHandler = (event)=>{
    event.preventDefault();

    const name = document.getElementById("name")
    const age = document.getElementById("age")
    const gender = document.getElementsByName("gender")
    const ans = document.getElementById("ans");

    let gen = ""
    
    if(gender[0].checked == true)
    {
        gen = "Male"
    }
    else if(gender[1].checked){
        gen = "Female"
    }
    else {
        gen = "Other"
    }


    console.log("Name = ",name.value);
    console.log("Age = ",age.value);
    console.log("Gender = ",gen);
    
    if(gen == "Male")
    {
        if(age.value > 18)
        {
            ans.innerHTML = "You are eligible for vote."
        }
        else{
            ans.innerHTML = "Not Eligible.."
        }
    }
    else if(gen == "Female")
    {
        if(age.value > 21)
        {
            ans.innerHTML = "You are eligible for vote."
        }
        else{
            ans.innerHTML = "Not Eligible.."
        }
    }
    else {
        if(age.value > 25)
        {
            ans.innerHTML = "You are eligible for vote."
        }
        else{
            ans.innerHTML = "Not Eligible.."
        }
    }
    
    

    // console.log(gender);
    
}