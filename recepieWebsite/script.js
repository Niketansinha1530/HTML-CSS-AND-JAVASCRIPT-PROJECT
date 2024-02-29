let inputBox=document.querySelector(".searchInput");
let btn=document.querySelector(".btn");
let recipeContainer=document.querySelector(".recipeContainer");

let recipeContent =document.querySelector(".recipe-content");
let closeBtn =document.querySelector(".closeBtn");

const url="https://www.themealdb.com/api/json/v1/1/search.php?s="
 async function fetchRecipes(dish){
    recipeContainer.innerHTML="<h2> Fetching Recipe.....</h2>"
    try {
        
    
const response= await fetch(url + dish);
const data= await response.json();
recipeContainer.innerHTML=""
data.meals.forEach(meal => {
    // console.log(meal);
    const recipeDiv= document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML =`
    <img src="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <p><span>${meal.strArea}</span>  Dish</p>
    <p>Belongs to <span> ${meal.strCategory}</span></p>
    `
    const button =document.createElement("button");
    button.textContent="View Recipe"
    recipeDiv.appendChild(button);

    // Adding EventListener to recipe button
    button.addEventListener("click",()=>{
        openRecipePopup(meal);
        recipeContainer.style.opacity="0.4";
    })
    recipeContainer.appendChild(recipeDiv);
});
} catch (error) {
    recipeContainer.innerHTML="<h2> Error in Fetching Recipe.....</h2>"
}
// console.log(data);
}

const fetchIngredients =(meal)=>{
    // console.log(meal);
    let IngredientsList ="";
    for(let i=1;i<=20;i++){
        const Ingredient = meal[`strIngredient${i}`];
        if(Ingredient){
            const measure =meal[`strMeasure${i}`];
            IngredientsList += `<li> ${measure} ${Ingredient}</li>`
        }else{
            break;
        }
    }
    return IngredientsList;
}

function openRecipePopup(meal){
recipeContent.innerHTML= 
`<h2 class ="recipeName">${meal.strMeal} </h2>
<h2 class ="Ingredients"> Ingredients : </h2>
<ul class ="IngredientList">${fetchIngredients(meal)}</ul>
<div>
    <h2 class ="Ingredients" >Insturctions: </h2>
    <p class ="recipeInstructions">${meal.strInstructions}</p>
</div>`

// console.log("hello")

recipeContent.parentElement.style.display="block";
}
closeBtn.addEventListener("click",()=>{
    recipeContent.parentElement.style.display="none";
    recipeContainer.style.opacity="1";
})
btn.addEventListener("click",(e)=>{
    e.preventDefault(); //this function stop the page reloading.
    // console.log("Hello")
    const dish=inputBox.value.trim();
    if(!dish){
        recipeContainer.innerHTML="<h2>Type the dish inside search Box</h2>"
    }else{
         fetchRecipes(dish);
    }
   
})