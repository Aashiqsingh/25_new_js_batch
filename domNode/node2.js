var students = [
    {
        id: 1,
        name: "Ishika",
        age: 20,
        address: "Delhi",
        email: "ishika@gmail.com",
        gender: "female"
    },
    {
        id: 2,
        name: "Manush",
        age: 25,
        address: "Delhi",
        email: "manu@gmail.com",
        gender: "male"
    },
    {
        id: 3,
        name: "riya",
        age: 30,
        address: "Delhi",
        email: "riya@gmail.com",
        gender: "female"
    },
    {
        id: 4,
        name: "rahul",
        age: 35,
        address: "surat",
        email: "rahul@gmail.com",
        gender: "male"
    }
]


let thead = document.getElementById("thead");
thead.style.display = "none"
// console.log(students);


const getData = () => {
    thead.style.display = ""
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < students.length; i++) {
            let tr = document.createElement("tr");
            let tdId = document.createElement("td");
            let tdName = document.createElement("td");
            let tdAge = document.createElement("td");
            let tdAddress = document.createElement("td");
            let tdEmail = document.createElement("td");
        let tdGender = document.createElement("td");


        tdId.innerHTML = students[i].id;
        tdName.innerHTML = students[i].name;
        tdAge.innerHTML = students[i].age;
        tdAddress.innerHTML = students[i].address;
        tdEmail.innerHTML = students[i].email;
        tdGender.innerHTML = students[i].gender;




        tbody.appendChild(tr)
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tr.appendChild(tdAddress)
        tr.appendChild(tdEmail)
        tr.appendChild(tdGender)
    }
}
