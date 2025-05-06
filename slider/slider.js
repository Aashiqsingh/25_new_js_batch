let prev = document.getElementById("prev")

var images = ["img.jpg","img2.jpg","img3.webp","img4.avif","img5.jpg"]
var currentIndex = 0;
var img = document.getElementById("img")

prev.addEventListener("click",()=>{

                        // (3 - 1 + 5) % 5
    currentIndex = (currentIndex - 1 + images.length)% images.length
    console.log(currentIndex);
    
    img.src = "../image/" +  images[currentIndex]
})

let next = document.getElementById("next")

next.addEventListener("click",()=>{

                        // 2 + 1 % 5
    currentIndex = (currentIndex + 1) % images.length
    img.src = "../image/" + images[currentIndex]
})