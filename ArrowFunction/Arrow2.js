const science = (per,fname)=>{

    console.log(fname + " ur admision confirm in science with per " + per);
    
}

const commerce = (per,fname)=>{
    
    console.log(fname + " ur admision confirm in commerce with per " + per);
}

const arts = (per,fname)=>{
    
    console.log(fname + " ur admision confirm in arts with per " + per);
}

var percentage = 81;

if(percentage > 90)
{
    science(percentage,"roshan");
}
else if(percentage > 70)
{
    commerce(percentage,"roshan");
}
else if(percentage > 50)
{
    arts(percentage,"roshan");
}
else{
    console.log("sorry! ur admission not confirm");
}



// const arts = (name) = > name + " ur admision confirm in Arts with per " + per