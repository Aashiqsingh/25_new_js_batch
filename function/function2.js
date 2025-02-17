function isPrime(x){

    for(let i=2;i<x;i++)
    {
        if(x%i==0)
        {
            return false;
        }
    }
    return true;

}

var x = isPrime(9)
// console.log(x == true ? " Prime" : " Not Prime");
console.log(x ? " Prime" : " Not Prime");

