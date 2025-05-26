function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data fetched successfully...");
        },4000)
    })


}


const get = async()=>{

    console.log("Starting......");

    let x = await getData()
    console.log(x);


    console.log("Ending......");
}


get()















// async function get(){


//     console.log("Starting......");
    

//     let x = await getData()
//     console.log(x);



//     console.log("Ending......");

    
// }

// get()