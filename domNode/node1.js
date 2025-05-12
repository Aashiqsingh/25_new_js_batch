function get(){

    let mydiv = document.getElementById("mydiv");

    let h1 = document.createElement("h1");
    h1.innerHTML = "Royal technosoft p ltd.";



    let a = document.createElement("a")
    a.innerHTML = "google"
    a.setAttribute("href","https://www.google.com")

    let img = document.createElement("img")
    img.src = "https://yt3.googleusercontent.com/QHbBaeC1MeAM8flc-N4cZXt9FtQBWN94ryZ9VXezIEWgUUIS9_vlPxnbmCc0oRXelFKv77Il=s900-c-k-c0x00ffffff-no-rj"
    img.style.height = "200px";
    img.style.width = "200px";
    img.addEventListener("click",()=>{
        img.style.height = "400px";
        img.style.width = "400px";
    })




    mydiv.appendChild(h1)
    mydiv.appendChild(a)
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(img)


}