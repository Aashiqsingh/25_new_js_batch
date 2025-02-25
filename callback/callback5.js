const science = (option)=>{
    return `${option.fname} ur adimision confirm in science with per ${option.per}`
    
}

const commerce = (option)=>{
    return `${option.fname} ur adimision confirm in commerce with per ${option.per}`
}

const art = (option)=>{
    return `${option.fname} ur adimision confirm in art with per ${option.per}`
}


// const admision = (fname,per,cb)=>{

//     var ans = cb({fname:fname,per:per})
//     // console.log(ans);
    

//     return ans;
// }

const admision = (fname,per,cb)=>{

    // var ans = cb({fname:fname,per:per})
    // // console.log(ans);
    

    // return ans;

    return cb({fname:fname,per:per});
}


var percentage = 71;
var temp;

if(percentage > 90)
{
    temp = admision("priti",percentage,science)
}
else if(percentage > 70)
{
    temp = admision("rahul",percentage,commerce)
}
else if(percentage > 50)
{
    temp = admision("ramesh",percentage,art)
}
console.log(temp);

