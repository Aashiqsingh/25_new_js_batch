var datas = ["hram","hseeta","hanuman","hlakshman","spiderman"];


// console.log(data);
// var x = datas.some((data)=>{
//     return data.length > 8
// })

// console.log(x);


// var x = datas.some((data)=>{
//     return data.startsWith("h")
// })

// console.log(x);


var x = datas.every((data)=>{
    return data.startsWith("h")
})

console.log(x);
