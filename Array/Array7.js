var language = ["hindi","english","marathi","finnish","french","urdu","tamil","telgu"];

// filter : it will ereturn new Array with modified data


// var x = language.filter((lang)=>{
//     return lang.length < 5
// })

// console.log(x);

var deleteLang = language.filter((lang)=>{
    return lang != "french"
})

console.log(deleteLang);
