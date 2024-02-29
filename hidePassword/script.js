let pfield=document.querySelector("#password");
let img=document.querySelector("#icon");

let flag=0;
img.addEventListener("click",()=>{
    if(flag==0){
        img.src="eye-close.png";
        pfield.type="password";
        flag=1;
    }else{
        img.src="eye-open.png";
        pfield.type="text";
        flag=0;
    }
})