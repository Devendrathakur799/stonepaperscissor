let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");

const compScorePara=document.querySelector("#comp-score");

const gencompchoice=() =>{
    const options=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame=()=>{

    msg.innertext="Game was Draw play again";
    msg.style.background= "#081b31";
};

const showWinner=(userWin, userchoice,compchoice)=>{
    if(userWin){
     userScore++;
     userScorePara.innerText=userScore;
     msg.innerText=`you win ${userchoice} beats ${compchoice}`;
     msg.style.background="green";
    }else{
        compScore++;
        compScorePara.innertText=compScore;
        msg.innerText= `you lose ${compchoice} beats your ${userchoice}`;
        msg.style.background="red";
    }

}
const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if(userchoice===compchoice){
        
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userWin=compchoice==="scissors"? false :true;
        }else{
            compchoice==="rock" ?false :true;
        }
        showWinner(userWin,userchoice,compchoice)

    }

}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userchoice=choice.getAttribute("id");

playGame(userchoice);
    });
    
});