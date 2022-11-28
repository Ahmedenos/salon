let btnImage=document.getElementById("btn-image")
let myImage=document.querySelector(".container-images")
let myIcon=document.querySelector(".icon-exit")
btnImage.onclick=function(){
    myImage.style.display="block"
}
myIcon.onclick=function(){
    myImage.style.display="none"
}