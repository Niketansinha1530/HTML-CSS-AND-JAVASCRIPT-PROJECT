const qrText=document.getElementById("qrText");
const qrImage=document.getElementById("qrImage");
const imgBox=document.getElementById("imgBox");

function getQRImage(){
    if(qrText.value.length>0)
    {
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
    
}

const btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    getQRImage();
})