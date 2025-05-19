// const getDate = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 message:"data fetched successfully...",
//                 status:200
//             })
//         },4000)
//     })

//     promise.then((res)=>{
//         console.log(res);
//     })
//     promise.catch((err)=>{
//         console.log(err);
//     })

// }

// getDate()



// const getDate = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 message:"data fetched successfully...",
//                 status:200
//             })
//         },4000)
//     })

//     return promise    

// }

// let ans = getDate()
// // console.log(ans);
// ans.then((res)=>{
//     console.log(res);
// }).catch((Err)=>{
//     console.log(Err);
// })


const getDate = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                message:"data fetched successfully...",
                status:200
            })
        },4000)
    })

       

}


getDate().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})









// let ans = getDate()
// // console.log(ans);
// ans.then((res)=>{
//     console.log(res);
// }).catch((Err)=>{
//     console.log(Err);
// })
