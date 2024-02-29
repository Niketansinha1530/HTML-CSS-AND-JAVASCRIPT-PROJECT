let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");

let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg-container");

let turn0=true;

const winPatterns =[
     [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =()=>{
    turn0=true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button is clicked")
        if(turn0){
            //player0
            box.value="o";
            turn0=false;
        }else{
            //playerX
            box.value="x";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const enabledBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.value="";
    }
}

const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

function showWinner(winner){
    msg.innerText=`Congratulations, Wnner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
   const checkWinner =()=>{
    for(let pattern of winPatterns){
        //  console.log(pattern[0],pattern[1],pattern[2])
        let pos1Val=boxes[pattern[0]].value;
        let pos2Val=boxes[pattern[1]].value;
        let pos3Val=boxes[pattern[2]].value;

        if(pos1Val!="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner ",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
   }

   newBtn.addEventListener("click",resetGame);
   resetBtn.addEventListener("click",resetGame);