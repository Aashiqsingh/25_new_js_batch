// 1. without return without argument

function demo()
{
    console.log("demo function...");
    
}

// demo()


// 2. without return with argument

function sub(a,b)
{
    console.log("Subtrcat = ",a-b);
    
}

// sub(5,2)


// 3. with return without argument

function test()
{
    return "test function call...";
}

// var x = test()
// console.log(x);

// console.log(test());

// 4. with return with argument


function mul(x,y,z)
{
    return x*y*z;
}

var x = mul(2,3,5);
console.log("Multiply = ",x);
