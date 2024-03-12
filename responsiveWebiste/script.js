console.log("Hello world");

let navbar=document.querySelector("nav");

window.onscroll=function(){
    if(window.scrollY > 0){
        navbar.style.background="#eefff9";
    }else{
        navbar.style.background='transparent';
    }
}
// menu icon working
let btn=document.querySelector(".menuIcon");
let menuLinks=document.querySelector("#menuLink");


function toogleMenu(){
    menuLinks.classList.toggle('show-menu'); //toggle show menu class ko add karega or remove karega click karnay pay
}
btn.addEventListener("click",()=>{
toogleMenu();
})