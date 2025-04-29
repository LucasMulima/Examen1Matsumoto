let agregar=function(){
    let areaimagen = document.getElementById("area")
    let img = document.createElement("img")
    let input = document.getElementById("text")
    
    img.src=input.value
    

    areaimagen.appendChild(img)
    input.value=""
}


let main = function(){
    let button = document.getElementById("button")
    button.addEventListener("click",agregar)
}
main()