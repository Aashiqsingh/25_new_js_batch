const getData = async()=>{
    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
    })

    const data = await response.json()
    console.log(data.data)

    let tbody = document.getElementById("tbody")

    data.data.forEach((data)=>{
        let tr = document.createElement("tr")
        let tdId = document.createElement("td")
        let tdFirstName = document.createElement("td")
        let tdage = document.createElement("td")
        let tdEmail = document.createElement("td")
        let tdStatus = document.createElement("td")
        let actionTd = document.createElement("td")
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "DELETE";
        deleteBtn.className = "btn btn-danger"
        deleteBtn.addEventListener("click",async()=>{
            // alert(data._id)
            const response2 = await fetch("https://node5.onrender.com/user/user/" + data._id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            console.log(response2);
            if(response2.status == 204)
            {
                alert("deleted successfully")
                tr.remove()
            }
            
            
        })
        let updateBtn = document.createElement("button")
        updateBtn.innerHTML = "UPDATE";
        updateBtn.className = "btn btn-info"

        tdId.innerText = data._id
        tdFirstName.innerText = data.name
        tdage.innerText = data.age
        tdEmail.innerText = data.email
        tdStatus.innerText = data.isActive

        tr.appendChild(tdId)
        tr.appendChild(tdFirstName)
        tr.appendChild(tdage)
        tr.appendChild(tdEmail)
        tr.appendChild(tdStatus)
        tr.appendChild(actionTd)
        actionTd.appendChild(deleteBtn)
        actionTd.appendChild(updateBtn)

        tbody.appendChild(tr)
    })
}