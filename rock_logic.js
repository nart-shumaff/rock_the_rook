let p_win_cunt = 0
let c_win_cunt = 0
let drow = 0


function computerPlay() {

    Options = ["rock","paper","Scissors"]
    //rendom num gnritor 1-3
    let ren_num = Math.floor( Math.random() * 4);
    //pic the move from options with the random num 
    let compMove = Options[ren_num];
    
    // return the move 
    return compMove;
    
} 
// "you win! "+"your score: "+p_win_cunt+"computer score: "+c_win_cunt
function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection == computerSelection){
        return "draw";
    }else if (playerSelection === "rock" && computerSelection === "Scissors"){
        return "you win";
    }if (playerSelection === "paper" && computerSelection ===  "rock" ){
        return "you win";
    }
    if  (playerSelection === "Scissors" && computerSelection ===  "paper" ){
        return "you win";
    }
    if  (playerSelection === "Scissors" && computerSelection === "rock" ){
        return "you lose";
    }
    if  (playerSelection === "paper" && computerSelection === "Scissors" ){
        return "you lose";
    }
    if (playerSelection === "rock" && computerSelection ===  "paper" ){
        return "you win";
    }

}
function Game() {
    
    for (let i=0; i < 5; i++){
        let playerSelection = window.prompt("enter you move(rock,paper,Scissors)");
    //playerSelection = window.prompt("enter your move: rook or rock?");
        let computerSelection = computerPlay();
        console.log("your move :" + playerSelection)
        console.log("computer move :"+computerSelection)
        if("you lose" === (playRound(playerSelection,computerSelection))){
            c_win_cunt += 1 ;
            console.log(playRound(playerSelection, computerSelection));
        }else if ("you win" === (playRound(playerSelection,computerSelection))){
            p_win_cunt += 1 ;
            console.log(playRound(playerSelection, computerSelection));
        }else{
            drow += 1
        }
    }
    if (p_win_cunt > c_win_cunt){
        console.log("gg you bet the computer")
    }else {
        console.log("soryy you didnt win")

    }
    console.log("your score:"+p_win_cunt);
    console.log("computer score"+c_win_cunt);
    console.log("drows:"+drow)
}
    
Game();
  
  //console.log(playRound(playerSelection, computerSelection));
  