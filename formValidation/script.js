let nameError=document.querySelector("#name-error")
let emailError=document.querySelector("#email-error")
let phError=document.querySelector("#ph-error")
let msgError=document.querySelector("#msg-error")
let error=document.querySelector("#error");

function validateName(){
    
    let name=document.querySelector("#name").value;
    // console.log("Hello");

    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write full name';
        return false;
    }
    nameError.innerHTML ='<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validatePh(){
    let phone=document.querySelector("#mobile").value;

    if(phone.length==0){
        phError.innerHTML="Ph Number is required";
        return false;
    }
    if(phone.length<10){
        phError.innerHTML="Enter 10 digit";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phError.innerHTML='Only digits please';
        return false;
    }
    phError.innerHTML='<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validateEmail(){

    let email=document.querySelector("#email").value;

    if(email.length==0){
        emailError.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.innerHTML='Email Invalid';
        return false;
    }
    emailError.innerHTML='<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validatemsg(){
    let msg=document.querySelector("#msg").value;
    let required =30;
    let left=required-msg.length;

    if(left>0){
        msgError.innerHTML=left +'more characters required';
        return false;
    }
    msgError.innerHTML='<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validateForm(){
    
    if(!validateName() || !validateEmail() || !validatePh() || !validatemsg() ){
        error.style.display='block';
        error.innerHTML="Please fix the problem";
        setTimeout(function(){error.style.display='none'},3000);
        return false;
    }
}