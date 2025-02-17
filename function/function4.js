function singapore(amount , name)
{
    return name + " your tour is confirm singapore with package " + amount
}

function lasvegas(amount , name){
    return name + " your tour is confirm las vegas with package " + amount
}

function goa(amount , name){
    return name + " your tour is confirm goa with package " + amount
}


var budget = 4001;
var fname = "rahul";
var flag;


if(budget > 4000)
{
    flag = singapore(budget,"hiya");
}
else if(budget > 3500)
{
    flag = lasvegas(budget,fname);
}
else if(budget > 3000)
{
    flag = goa(budget,fname);
}
else{
    console.log("Sorry, you are not eligible for any package");
}
console.log(flag);
