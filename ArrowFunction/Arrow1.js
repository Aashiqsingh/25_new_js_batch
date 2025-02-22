// function demo()
// {
//     console.log("Hello, World!");
// }

const pi = 3.14;

const demo = ()=>{
    console.log("Hello, World!");
    
}


demo()


// const pi = 3.14;

// function isOdd(x)
// {
//     return x % 2 != 0
// }
// var x = isOdd(16)
// console.log(x ? "Odd" : "Even");

const isEven = (x)=> x % 2 === 0;



// const isEven = (x)=> x % 2 === 0;


var x = isEven(16)
console.log(x == true ? "Even" : "odd");
