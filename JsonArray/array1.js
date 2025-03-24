var employees = [
    {
        id:1,
        name:"rahul",
        salary:5000,
        department:"It",
        email:"rahul@gmail.com",
        isMarried:true,
        age:25
    },
    {
        id:2,
        name:"ramesh",
        salary:6000,
        department:"Finance",
        email:"ramesh@gmail.com",
        isMarried:false,
        age:30
    },
    {
        id:3,
        name:"raju",
        salary:4000,
        department:"HR",
        email:"raju@gmail.com",
        isMarried:true,
        age:35
    },
    {
        id:4,
        name:"Suresh",
        salary:6000,
        department:"Finance",
        email:"ramesh@gmail.com",
        isMarried:false,
        age:30
    }
]


// var sum = 0;
// employees.forEach((emp)=>{
//     sum += emp.salary
// })
// console.log(sum);

// var totalSalary = employees.reduce((sum,emp)=>{
//     return sum + emp.salary
// },0)

var totalSalary = employees.reduce((sum,emp)=> sum + emp.salary,0)

console.log(totalSalary);





// employees.forEach((emp)=>{
//     if(emp.department == "Finance")
//     {
//         console.log(emp);
        
//     }
// })

// var x = employees.filter((emp)=> emp.department == "Finance")
// console.log(x);



// var x = employees.filter((emp)=>{
//     return emp.salary > 5000
// })

// console.log(x);




// for(let i=0;i<employees.length;i++){
//     console.log(employees[i].name);
    
// }

// var x = employees.map((emp)=>{
//     return emp.name
// })

// console.log(x);
