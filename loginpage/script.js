let btn=document.querySelector("#login-btn");
let over=document.querySelector(".overlay");
let box=document.querySelector("#login-box");
let cls=document.querySelector("span");

btn.addEventListener("click",function(){
over.style.opacity=1;
box.style.top="50%"
})

cls.addEventListener("click",function(){
    over.style.opacity=0;
    box.style.top="-50%"
})

over.addEventListener("click",function(){
    over.style.opacity=0;
    box.style.top="-50%"
})