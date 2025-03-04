const pdfHandler = (option)=>{
    return option.fname + " handle with pdf format...";
    
}

const csvHandler = (option)=>{
    return option.fname + " handle with csv format...";
}

const wordHandler = (option)=>{
    return option.fname + " handle with word format...";
}

// const Handler = (file,cb)=>{
//     var result = cb({
//         fname:file.name,
//         size:file.size
//     })

//     // console.log(result);

//     return result;
    
// }

const Handler = (file,cb)=>{
    return cb({
        fname:file.name,
        size:file.size
    })

    // console.log(result);

    
    
}


var fileName = "demo.csv";
var temp;

if(fileName.endsWith(".pdf"))
{
    temp = Handler({name:fileName,size:"1000kb",longitude:"6754263"},pdfHandler)
}
else if(fileName.endsWith(".csv")){
    temp = Handler({name:fileName,size:"500kb",latitude:"2345678"},csvHandler)
}
else if(fileName.endsWith(".word")){
    temp = Handler({name:fileName,size:"200kb",address:"1234567890"},wordHandler)
}

console.log(temp);
