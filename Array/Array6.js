var language = ["hindi","english","marathi","finnish","french","urdu","tamil","telgu"];

// map : it will return new Array with same length

// var x = language.map((lang)=>{
//     return lang.toUpperCase()
// })

// console.log(x);

// var x = language.map((lang)=>{
//     return lang.length < 5
// })

// console.log(x);


var newArray = [];
language.forEach((lang)=>{
    newArray.push(lang);
})

console.log(newArray);
