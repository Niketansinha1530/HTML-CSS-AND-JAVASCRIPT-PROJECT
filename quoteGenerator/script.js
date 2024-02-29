const api_url="https://api.quotable.io/random";


const quote=document.querySelector("#quote");
const author=document.querySelector("#author");

const btn=document.querySelector("#btn");

async function getQuote(url){
    const response =await fetch(url);
    var data= await response.json();
    // console.log(data);
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getQuote(api_url);

btn.addEventListener("click",function(){
    getQuote(api_url);
})

const btn2=document.querySelector("#btn2");

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML +"---"+author.innerHTML,"Tweet Window","width=600,height=300");
}
btn2.addEventListener("click",function(){
    tweet();
})