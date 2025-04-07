var images = ["img.jpg","img2.jpg","img3.webp","img4.avif","img5.jpg"];


var a = 0;
function changeImg(){

    // console.log(a++);
    const randomIndex = Math.floor(Math.random() * images.length)
    // console.log(randomIndex);
    const img = document.getElementById("img");
    img.src = "../image/" +  images[randomIndex];
    
    

}