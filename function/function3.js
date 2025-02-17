function singapore(amount , name)
{
    console.log(name + " your tour is confirm singapore with package " + amount);
}

function lasvegas(amount , name){
    console.log(name + " your tour is confirm las vegas with package " + amount);
}

function goa(amount , name){
    console.log(name + " your tour is confirm goa with package " + amount);
}


var budget = 2800;
var fname = "rahul";


if(budget > 4000)
{
    singapore(budget,"hiya");
}
else if(budget > 3500)
{
    lasvegas(budget,fname);
}
else if(budget > 3000)
{
    goa(budget,fname);
}
else{
    console.log("Sorry, you are not eligible for any package");
}
