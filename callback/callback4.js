const science = (option)=>{
    return `${option.fname} ur adimision confirm in science with per ${option.per}`
    
}

const commerce = (option)=>{
    return `${option.fname} ur adimision confirm in commerce with per ${option.per}`
}

const art = (option)=>{
    return `${option.fname} ur adimision confirm in art with per ${option.per}`
}


const admision = (fname,per,cb)=>{

    var ans = cb({fname:fname,per:per})
    console.log(ans);
    
}


var percentage = 71;

if(percentage > 90)
{
    admision("priti",percentage,science)
}
else if(percentage > 70)
{
    admision("rahul",percentage,commerce)
}
else if(percentage > 50)
{
    admision("ramesh",percentage,art)
}

