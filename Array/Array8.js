var language = ["hindi","english","marathi","finnish","french","urdu","tamil","telgu"];

const deleteLang = (langName)=> language.filter((lang)=>lang!== langName)



var x = deleteLang("english")
console.log(x);






// const deleteLang = (langName)=>{
//     return language.filter((lang)=>lang!== langName)
// }


// var x = deleteLang("hindi")
// console.log(x);











// const deleteLang = (langName)=>{
//     return language.filter((lang)=>{
//         return lang!== langName;
//     })
// }


// var x = deleteLang("telgu")
// console.log(x);




// const deleteLang = (langName)=>{

//     var response = language.filter((lang)=>{
//         return lang !== langName
//     })


//     return response
// }


// var x = deleteLang("tamil")
// console.log(x);
