const getOrder = ()=>{
    console.log("Food is going to be prepared...");

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:121,
                message:"Order placed successfully...",
                amount:349
            })
        },4000)
    })
}

const getPayement = (data)=>{
    console.log("Payment is being processed for orderId:");

    return new Promise((sucess,failure)=>{
        setTimeout(()=>{
            sucess({
                paymentId:data.orderId,
                message:"Payment done successfully...",
                amount:data.amount
            })
        },4000)
    })
}


const result = async()=>{

    console.log("starting......");
    

    let ans = await getOrder()
    console.log("food order code .....",ans);
    let payment = await getPayement(ans)
    console.log("Payment code ....",payment);

    console.log("ending......");
}

result()