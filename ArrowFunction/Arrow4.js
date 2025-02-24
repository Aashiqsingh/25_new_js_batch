const wordHandler = (option)=>{

    console.log(option.fname + " file handle with wordHandler");
    
}

const csvHandler = (option)=>{
    console.log(option.fname + " file handle with csvHandler");
}

const pngHandler = (option)=>{
    console.log(option.fname + " file handle with pngHandler");
}


var fileName = "abc.png";


if(fileName.endsWith(".word"))
{
    wordHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".csv"))
{
    csvHandler({fname:fileName,size:"500kb"})
}
else if(fileName.endsWith(".png"))
{
    pngHandler(
        {
            fname:fileName,
            size:"2000kb"
        }
    )
}

