

let bodyElem=document.getElementById("bodeThemes")
let btn=document.getElementById("themes")



btn.addEventListener("click",()=>{
    if (bodyElem.classList.contains("body-white")) {
        bodyElem.classList.add("body-black")
        bodyElem.classList.remove("body-white")
    }else{
        bodyElem.classList.add("body-white")
        bodyElem.classList.remove("body-black")
    }
})