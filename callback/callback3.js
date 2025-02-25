const science = (option)=>{
    console.log(`${option.fname} ur adimision confirm in science with per ${option.per}`);
    
}

const commerce = (option)=>{
    console.log(`${option.fname} ur adimision confirm in commerce with per ${option.per}`);
}

const art = (option)=>{
    console.log(`${option.fname} ur adimision confirm in art with per ${option.per}`);
}


const admision = (fname,per,cb)=>{

    cb({fname:fname,per:per})
}


var percentage = 91;

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

