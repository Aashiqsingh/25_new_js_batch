var product = {
    id:101,
    name:"I phone",
    price:98767,
    isAvaliable:true,
    color:["red","green","blue","white"],
    details:{
        ram:"8gb",
        storage:"128gb",
        camera:"12mp",
        battery:"3000mAh",
        displaySize:"6.5inch",
        operatingSystem:"iOS",
       
    }
}

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.isAvaliable);
console.log(product.color);
// console.log(product.color[0]);
// console.log(product.color[1]);

for(let i=0;i<product.color.length;i++)
{
    console.log(product.color[i]);
    
}

console.log(product.details);
console.log(product.details.storage);
console.log(product.details.ram);
console.log(product.details.displaySize);



console.log(product.details.address);
console.log(product.details.address.city);






