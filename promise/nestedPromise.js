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

const getPayment = (data)=>{
    console.log("Payment is being processed for orderId:");
    
    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                paymentId:data.orderId,
                message:"Payment done successfully...",
                amount:data.amount
            })
        },3000)
    })
}


getOrder().then((data)=>{
    console.log("food order code .....",data);
    getPayment(data).then((paymentData)=>{
        console.log("Payment code ....",paymentData);
    }).catch((error)=>{
        console.log("Payment failed:", error);
    })
}).catch((err)=>{
    console.log("order failed:", err);
})