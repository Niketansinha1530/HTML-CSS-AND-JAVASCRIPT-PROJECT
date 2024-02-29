const passwordBox = document.getElementById("password");
const btn2=document.querySelector("#btn2");
let btn = document.querySelector("#btn");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loweerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const allChars = upperCase + loweerCase + number + symbol;
console.log(allChars);
function createPassword() {
    let password = "";
    password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    password += loweerCase.charAt(Math.floor(Math.random() * loweerCase.length));
    password += number.charAt(Math.floor(Math.random() * number.length));
    password += symbol.charAt(Math.floor(Math.random() * symbol.length));

    while (length > password.length) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    passwordBox.value = password;
}

btn.addEventListener("click", () => {
    createPassword();
});

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

btn2.addEventListener("click",()=>{
    copyPassword();
})