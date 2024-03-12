const weight=document.querySelector("#weight");
const height = document.querySelector("#height");

const submitBtn=document.querySelector(".btn1");
const reloadBtn=document.querySelector(".btn2");

const resultView= document.querySelector(".result-section");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let w= parseFloat(weight.value);
    let h= parseFloat(height.value);

    let str="";

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }else{

    
    let bmi= w/(h**2);
    console.log(bmi);
    if(bmi<18.5){
        str="Underweight";
    }else if(bmi>=18.5 || bmi <=24.9){
        str="Normal weight"
    }else if(bmi>=25 || bmi<29.9){
        str="overweight"
    }else{
        str="obsity"
    }

    let div = document.createElement("div");
    div.classList.add("bmiInfo");
    div.innerHTML=`
    <h3>Your BMI is: ${bmi.toFixed(2)}</h3>
    <h4>${str}</h4>
    `;
    resultView.appendChild(div);
    resultView.style.display="block";
}
})
reloadBtn.addEventListener("click",()=>{
    location.reload();
})
/*
Underweight: BMI less than 18.5
Normal weight: BMI between 18.5 and 24.9
Overweight: BMI between 25 and 29.9
Obesity: BMI 30 or greater
*/