// const wordHandler = (option)=>{

//     return option.fname + " file handle with wordHandler"
    
// }

// const csvHandler = (option)=>{
//     return option.fname + " file handle with csvHandler"
// }

// const pngHandler = (option)=>{
//     return option.fname + " file handle with pngHandler"
// }


const wordHandler = (option)=> option.fname + " file handle with wordHandler" + option.size
    


const csvHandler = (option)=> option.fname + " file handle with csvHandler"


const pngHandler = (option)=> option.fname + " file handle with pngHandler"



var fileName = "abc.word";
var temp;

if(fileName.endsWith(".word"))
{
    temp = wordHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".csv"))
{
    temp = csvHandler({fname:fileName,size:"500kb"})
}
else if(fileName.endsWith(".png"))
{
    temp = pngHandler(
        {
            fname:fileName,
            size:"2000kb"
        }
    )
}
console.log(temp);


