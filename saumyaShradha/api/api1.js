// API : Application Programming Interface
// GET , POST , PUT , DELETE

const getData = async()=>{
    const response = await fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
        headers:{
            "x-api-key": "reqres-free-v1"
        }
        
    })

    // console.log(response);
    const res = await response.json()
    console.log(res);
    console.log(res.data);


    let tbody = document.getElementById("tbody");

    for(let i=0;i<res.data.length;i++){
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let firstNameTd = document.createElement("td");
        let lastNameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let avatarTd = document.createElement("td");
        let img = document.createElement("img");

        idTd.innerHTML = res.data[i].id;
        firstNameTd.innerHTML = res.data[i].first_name;
        lastNameTd.innerHTML = res.data[i].last_name;
        emailTd.innerHTML = res.data[i].email;
        img.src = res.data[i].avatar



        tbody.appendChild(tr);
        tr.appendChild(idTd)
        tr.appendChild(firstNameTd)
        tr.appendChild(lastNameTd)
        tr.appendChild(emailTd)
        tr.appendChild(avatarTd)
        avatarTd.appendChild(img)
    }
    
}