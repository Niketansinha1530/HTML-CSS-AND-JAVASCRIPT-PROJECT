let timedisplay=document.querySelector(".timedisplay");
let stopBtn=document.querySelector("#stopBtn");
let startBtn=document.querySelector("#startBtn");
let resetBtn=document.querySelector("#resetBtn");

let mins=00;
let secs=00;
let msec=00;

let timerId=null;

startBtn.addEventListener("click",()=>{
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId= setInterval(startTimer,10);
})
stopBtn.addEventListener("click",()=>{
   clearInterval(timerId);
})
resetBtn.addEventListener("click",()=>{
    clearInterval(timerId);
    timedisplay.innerHTML=`00 : 00 : 00`;
    msec=secs=mins=00;
 })
function startTimer(){
    msec++;
    if(msec == 100)
    {
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }

    let msecString=msec<10 ? `0${msec}`:msec;
    let minsString=mins<10 ? `0${mins}`:mins;
    let secsString=secs<10 ? `0${secs}`:secs;

    timedisplay.innerHTML=`${minsString} : ${secsString} : ${msecString}`
}