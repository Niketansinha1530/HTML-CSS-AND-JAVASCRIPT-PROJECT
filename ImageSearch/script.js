
const accessKey='mxZp7Qhm_tjYgaYi6pLx_OTvzd-f24bq_IE9WuH_BNk';

let SearchInput=document.querySelector(".SearchInput");
let btn=document.querySelector(".btn");
let ImageContainer=document.querySelector(".images-container");
let loadMoreBtn=document.querySelector(".loadMoreBtn");
let pageNo=1;
//function to fetch images using Unsplash API
const fetchImages = async(query,pageNo)=>{

    try {
        
        if(pageNo==1){
            ImageContainer.innerHTML=" ";
        }
        const url=`https://api.unsplash.com/search/photos?query=${query}&per_page=30&page=${pageNo}&client_id=${accessKey}`;
    
        const response = await fetch(url);
        if(response==403){
            ImageContainer.innerHTML="<h2> No Such Related Images Founds ...</h2> ";
        }
        const data= await response.json();
    
        //console.log(data);
        if(data.results.length > 0){
            data.results.forEach(photo => {
          
            const imagElement=document.createElement("div");
            // console.log("helo");
    
    
            imagElement.classList.add('imagDiv');
            imagElement.innerHTML= `<img src="${photo.urls.regular}" />`;
            const overlayElement=document.createElement("div");
    
    
            const overlayText=document.createElement("h3");
            overlayText.innerText=`${photo.alt_description}`
            overlayElement.classList.add('overlay');
            
    
            overlayElement.appendChild(overlayText);
    
            imagElement.appendChild(overlayElement);
    
            ImageContainer.appendChild(imagElement);
        
            if(data.total_pages===pageNo){
                loadMoreBtn.style.display="none";
            }else{
                loadMoreBtn.style.display="block";
            }
        
        });
        }else{
            ImageContainer.innerHTML="<h2> No Such Related Images Founds ...</h2> ";
            if(loadMoreBtn.style.display=="block"){
                loadMoreBtn.style.display="none";
            }
        }
    } 
    catch (error) {
        ImageContainer.innerHTML=`<h2>Failed to Fetch Images. </h2>`
    }
    
}



//Adding Event Listener on Search Button
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const InputValue=SearchInput.value;
    
    // console.log(InputValue);

    if(InputValue !==""){
        pageNo=1; //keep in mind.
        fetchImages(InputValue,pageNo);
        // SearchInput.value="";
    }else{
        ImageContainer.innerHTML=`<h2> Please enter a search query. </h2>`
        if(loadMoreBtn.style.display=="block"){
            loadMoreBtn.style.display="none";
        }
        
    }
})


loadMoreBtn.addEventListener("click",()=>{
    let valueImage=SearchInput.value;
    fetchImages(valueImage,++pageNo);
    // SearchInput.value="";
})