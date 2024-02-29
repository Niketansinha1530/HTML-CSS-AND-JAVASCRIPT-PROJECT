let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

let toastBox = document.getElementById("toastBox");

let successMsg = '<i class="ri-checkbox-circle-fill"></i>Successfully submitted';
let errorMsg = '<i class="ri-close-circle-fill"></i>Please fix the errors';
let invalidMsg = '<i class="ri-error-warning-fill"></i>Invalid input check again';

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('errors')) {
        toast.classList.add('errors');
    } else if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },5500);
}

btn1.addEventListener("click", () => {
    showToast(successMsg);
});
btn2.addEventListener("click", () => {
    showToast(errorMsg);
});
btn3.addEventListener("click", () => {
    showToast(invalidMsg);
});




