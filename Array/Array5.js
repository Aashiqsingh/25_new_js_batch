var language = ["mhindi","menglish","marathi","mfinnish","mfrench","murdu","mtamil","telgu"];

// Every : boolean


// var x = language.every((lang)=> lang.length < 5)
// console.log(x);


var x = language.every((lang)=>{
    return lang.startsWith("m")
})

console.log(x);
