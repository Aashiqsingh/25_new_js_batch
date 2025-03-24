var products = [
        {
            id:101,
            name:"Iphone",
            category:"Mobile",
            price:100000,
            color:["red","black","blue","green","yellow"],
            isAvailable:true,
            details:{
                description:"Apple iPhone 13 Pro Max",
                weight:1500,
                screenSize:6.1,
                batteryLife:48,
            }
        },
        {
            id:102,
            name:"Samsung Galaxy S21 Ultra",
            category:"Mobile",
            price:75000,
            color:["white","black","blue","green"],
            isAvailable:false,
            details:{
                description:"Samsung Galaxy S21 Ultra 5G",
                weight:1600,
                screenSize:6.7,
                batteryLife:45,
            }
    
        },
        {
            id:103,
            name:"Dell laptop",
            category:"Laptop",
            price:85000,
            color:["white","black","blue","aqua"],
            isAvailable:false,
            details:{
                description:"widows with tablets",
                weight:1400,
                screenSize:6.4,
                batteryLife:42,
            }
    
        }
    ]

    var FindWhiteClr = products.filter((prod)=> prod.color.includes("white"))
    console.log(FindWhiteClr);
    




    // console.log(products);

    // var mobileCategory = products.filter((prod)=>{
    //     return prod.category === "Mobile"
    // })
    
    // console.log(mobileCategory);

    // var x = products.reduce((sum, prod) => {
    //     return sum + prod.price
    // }, 0)

    // console.log(x);
// products.forEach((prod)=>{
//         if(prod.isAvailable == true)
//          {
//              console.log(prod);
             
//          }
//      })


     

    
    