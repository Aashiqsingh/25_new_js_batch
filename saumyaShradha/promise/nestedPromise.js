const getOrder = ()=>{
    console.log("Food is going to be placed...");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:1213,
                message:"Order placed successfully...",
                amount:456
            })
        },4000)
    })
}

const getPayment = (data)=>{
    console.log("Payment is going to be made...");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                message:"Payemnt successful...",
                amount:data.amount
            })
        },5000)
    })
    
}


getOrder().then((data)=>{
    console.log("Food placed successfully...",data);
    getPayment(data).then((res)=>{
        console.log("Payment made successfully...",res);
    }).catch((error)=>{
        console.log("Payment failed...",error);
    })
}).catch((err)=>{
    console.log("Food order cancel....",err);
})