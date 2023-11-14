const rockButton= document.getElementById('rock');
const scissorsButton = document.getElementById("scissors");
const paperButton= document.getElementById("paper");
const lizardButton= document.getElementById("lizard");
const spockButton= document.getElementById("spock");
const text = document.querySelector("#text");
const selectGameButton= document.getElementById('select-game');
const classicButton= document.getElementById('classic');
const bonusButton= document.getElementById('bonus');
const bottomText= document.querySelector("#bottom-text");
const computerText= document.querySelector("#computer-text");
const rulesButton= document.querySelector("#rules");
const button1 = document.querySelector("#button1"); // for the previous button
const button2 = document.querySelector("#button2"); //for the reset button- both text,score
const button3 = document.querySelector("#button3"); //for the next button and Play Game

let selectedRock= false;
let selectedPaper= false;
let selectedScissors= false;
let selectedLizard= false;
let selectedSpock= false;
let player=0;

let computerSelectedRock= false;
let computerSelectedPaper= false;
let computerSelectedScissors= false;
let computerSelectedLizard= false;
let computerSelectedSpock= false;
let computer=0;
let score=0;

let classicModeSet= false;
let bonusModeSet=false;
bottomText.textContent="Let's Have Some Fun!!";

let rules= ["Paper beats Rock", "Rock beats Scissors","Scissors beat Paper","Rock crushes Lizard", "Lizard poisons Spock","Spock smashes Scissors","Scissors beat Lizard",
"Lizard eats Paper","Paper disapproves Spock","Spock vaporizes Rock", "Now that you know the rules, select your game mode!"];

let currentRulesIndex=0;

/* function to change the text in the text section */
function updateInstruction() {
    bottomText.textContent= rules[currentRulesIndex]; //displays the instructions in textbox below game-window   
}
/* ------for our previous button ------ */
button1.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentRulesIndex>0){ //don't want to decrease index value if we are at index 0, only if greater than 1 can we go backwards
        currentRulesIndex--;
        updateInstruction();
    }
    button3.textContent = "Next"; //need to reset the button3 text if the user reaches the end of the instructions and wants to go back so that it doesn't say play game
});

/* ------ for our reset button  ------ */
button2.addEventListener("click", (e) => {
    e.preventDefault();
    currentRulesIndex =0; //sets the directions to the first item in the array
    updateInstruction();
    resetScore(0); //calls the resetScore function to update the score to zero
});

/* ------ the next button ------ */
button3.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentRulesIndex <rules.length -1){ //will change to the next instruction in our arrayList as long as the index is within our arrayList
        currentRulesIndex++; //want to move to the next index to display the next instruction
        updateInstruction();
    }
    else if (currentRulesIndex == rules.length-1){
        button1.style.display="none";
        button2.style.display="none";
        button3.style.display="none";
        selectGameButton.style.display="inline-block"
    }
});



//image list- holds all the urls for the images
imageList= ["https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/270a.png","https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f590.svg","https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/270c.svg","https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f98e.svg","https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f596.svg"];
// order of the list: rock, paper, scissors, lizard, spock


//button events for user selection- changes text and boolean values
rockButton.addEventListener("click", (e)=>{
    rockButtonSelected();
});
scissorsButton.addEventListener("click", (e)=>{
    scissorsButtonSelected();
});
paperButton.addEventListener("click", (e)=>{
    paperButtonSelected();
});
spockButton.addEventListener("click", (e)=>{
    spockButtonSelected();
});
lizardButton.addEventListener("click", (e)=>{
    lizardButtonSelected();
});
selectGameButton.addEventListener("click",(e)=>{
    selectGameModeMenu();
    selectGameButton.style.display="none";
    button1.style.display="none";
    button2.style.display="none";
    button3.style.display="none";
});

rulesButton.addEventListener("click", (e)=>{
    classicButton.style.display="none";
    selectGameButton.style.display="inline-block";
    selectGameButton.textContent="Go Back";
    bonusButton.style.display="none";
    rockButton.style.display="none";
    scissorsButton.style.display="none";
    paperButton.style.display="none";
    button1.style.display="inline-block";
    button2.style.display="inline-block";
    button3.style.display="inline-block";
    rulesButton.style.display="none";
    bottomText.textContent="Welcome to the Tutorial! Please click the next button to start the tutorial.";
    
})

function displayRules(){
    bottomText.textContent= rules;
}

//changes for the user game window text display- ensures variables update if user selects a different button and then reverts back
function rockButtonSelected(self){
    selectedRock= true;
    selectedPaper= false;
    selectedScissors= false;
    selectedLizard= false;
    selectedSpock= false;
    text.textContent= "You have selected Rock";
    changeImage(selectedRock, selectedPaper, selectedScissors, selectedLizard,selectedSpock);
    finalizeAnswer(selectedRock,selectedPaper,selectedScissors,selectedLizard, selectedSpock);
    determineWinner(player, computer);
    
}
function paperButtonSelected(self){
    selectedRock= false;
    selectedPaper= true;
    selectedScissors= false;
    selectedLizard= false;
    selectedSpock= false;
    text.textContent= "You have selected Paper";
    changeImage(selectedRock, selectedPaper, selectedScissors, selectedLizard,selectedSpock);
    finalizeAnswer(selectedRock,selectedPaper,selectedScissors,selectedLizard, selectedSpock);
    determineWinner(player, computer);
}
function scissorsButtonSelected(self){
    selectedRock= false;
    selectedPaper= false;
    selectedScissors= true;
    selectedLizard= false;
    selectedSpock= false;
    text.textContent= "You have selected Scissors"
    changeImage(selectedRock, selectedPaper, selectedScissors, selectedLizard,selectedSpock);
    finalizeAnswer(selectedRock,selectedPaper,selectedScissors,selectedLizard, selectedSpock);
    determineWinner(player, computer);
}
function lizardButtonSelected(self){
    selectedRock= false;
    selectedPaper= false;
    selectedScissors= false;
    selectedLizard= true;
    selectedSpock= false;
    text.textContent= "You have selected Lizard";
    changeImage(selectedRock, selectedPaper, selectedScissors, selectedLizard,selectedSpock);
    finalizeAnswer(selectedRock,selectedPaper,selectedScissors,selectedLizard, selectedSpock);
    determineWinner(player, computer);
}
function spockButtonSelected(self){
    selectedRock= false;
    selectedPaper= false;
    selectedScissors= false;
    selectedLizard= false;
    selectedSpock= true;
    text.textContent= "You have selected Spock";
    changeImage(selectedRock, selectedPaper, selectedScissors, selectedLizard,selectedSpock);
    finalizeAnswer(selectedRock,selectedPaper,selectedScissors,selectedLizard, selectedSpock);
    determineWinner(player, computer);
}
function classicModeSelected(){
    classicButton.style.display="none";
    selectGameButton.style.display="block";
    selectGameButton.textContent="Change Game Mode";
    bonusButton.style.display="none";
    rockButton.style.display="inline-block";
    scissorsButton.style.display="inline-block";
    paperButton.style.display="inline-block";
}
function bonusModeSelected(){
    bonusButton.style.display="none";
    classicButton.style.display="none";
    selectGameButton.style.display="block";
    selectGameButton.textContent="Change Game Mode";
    bonusButton.style.display="none";
    rockButton.style.display="inline-block";
    scissorsButton.style.display="inline-block";
    paperButton.style.display="inline-block";
    lizardButton.style.display="inline-block";
    spockButton.style.display="inline-block";
}

//when user is satisfied with their choice- will trigger the computer assignment and declare winner
function finalizeAnswer(selectedRock, selectedPaper, selectedScissors, selectedLizard,selectedSpock){
    if (selectedRock){
        text.textContent= "ROCK";
        player=1;
        
    }
    else if(selectedPaper){
        text.textContent= "PAPER";
        player=2;
    }
    else if(selectedScissors){
        text.textContent="SCISSORS";
        player=3;
    }
    else if(selectedLizard){
        text.textContent="LIZARD";
        player=4;
    }
    else if (selectedSpock){
        text.textContent="SPOCK";
        player=5;
    }
    else{
        text.textContent="Invalid Selection";
    }
    generateComputerAnswer();

}

//when user clicks the button, changes the displayed image
function changeImage(selectedRock, selectedPaper, selectedScissors, selectedLizard,selectedSpock){
    let imageSelected= document.getElementById("emoji");
    if (selectedRock){
        imageSelected.src= imageList[0]; 
    }
    else if(selectedPaper){
        imageSelected.src= imageList[1];
    }
    else if(selectedScissors){
        imageSelected.src= imageList[2];
    }
    else if(selectedLizard){
        imageSelected.src= imageList[3];
    }
    else if (selectedSpock){
        imageSelected.src= imageList[4];
    }
    else{
        text.textContent="Invalid Selection";
    }  
}
function computerChangeImage(computerSelectedRock, computerSelectedPaper, computerSelectedScissors, computerSelectedLizard,computerSelectedSpock){
    let imageSelected= document.getElementById("cmp-emoji");
    if (computerSelectedRock){
        imageSelected.src= imageList[0]; 
    }
    else if(computerSelectedPaper){
        imageSelected.src= imageList[1];
    }
    else if(computerSelectedScissors){
        imageSelected.src= imageList[2];
    }
    else if(computerSelectedLizard){
        imageSelected.src= imageList[3];
    }
    else if (computerSelectedSpock){
        imageSelected.src= imageList[4];
    }
    else{
        text.textContent="Invalid Selection";
    }  
}

function selectGameModeMenu(){
    rockButton.style.display="none";
    scissorsButton.style.display="none";
    paperButton.style.display="none";
    lizardButton.style.display="none";
    spockButton.style.display="none";
    classicButton.style.display="inline-block";
    bonusButton.style.display="inline-block";
    bottomText.textContent= "Select the Game Mode:";

    //user selects classic mode
    classicButton.addEventListener("click", (e)=>{
        classicModeSet=true;
        bonusModeSet= false;
        rulesButton.style.display="none";
        classicModeSelected();
    });

    //user selects bonus mode
    bonusButton.addEventListener("click",(e)=>{
        bonusModeSet= true;
        classicModeSet= false;
        rulesButton.style.display="none";
        bonusModeSelected();
    });

}

function generateComputerAnswer(){
    let computerSelection=0;
    if (classicModeSet){
        computerSelection= Math.floor(Math.random()*3);
    }
    else{
        computerSelection= Math.floor(Math.random()*5);
    }
    //rock selected
    if (computerSelection == 0){
        computerText.textContent="ROCK";
        computerSelectedRock = true;
        computerSelectedPaper=false;
        computerSelectedScissors=false;
        computerSelectedSpock= false;
        computerSelectedLizard=false;
        computer=1;
        computerChangeImage(computerSelectedRock, computerSelectedPaper, computerSelectedScissors, computerSelectedLizard,computerSelectedSpock)
        
    }
    else if(computerSelection == 1){
        computerText.textContent= "PAPER";
        computerSelectedPaper= true;
        computerSelectedRock = false;
        computerSelectedScissors=false;
        computerSelectedLizard= false;
        computerSelectedSpock=false;
        computer=2;
        computerChangeImage(computerSelectedRock, computerSelectedPaper, computerSelectedScissors, computerSelectedLizard,computerSelectedSpock)
    }
    else if(computerSelection == 2){
        computerText.textContent= "SCISSORS";
        computerSelectedScissors= true;
        computerSelectedRock = false;
        computerSelectedPaper=false;
        computerSelectedLizard= false;
        computerSelectedSpock=false;
        computer=3;
        computerChangeImage(computerSelectedRock, computerSelectedPaper, computerSelectedScissors, computerSelectedLizard,computerSelectedSpock)
    }
    else if(computerSelection == 3){
        computerText.textContent ="LIZARD";
        computerSelectedLizard= true;
        computerSelectedRock = false;
        computerSelectedPaper=false;
        computerSelectedScissors=false;
        computerSelectedSpock=false;
        computer=4;
        computerChangeImage(computerSelectedRock, computerSelectedPaper, computerSelectedScissors, computerSelectedLizard,computerSelectedSpock)
    }
    else if(computerSelection == 4){
        computerText.textContent ="SPOCK";
        computerSelectedSpock= true;
        computerSelectedRock = false;
        computerSelectedPaper=false;
        computerSelectedScissors=false;
        computerSelectedLizard= false;
        computer=5;
        computerChangeImage(computerSelectedRock, computerSelectedPaper, computerSelectedScissors, computerSelectedLizard,computerSelectedSpock)
    }
    else{
        computer=6;
        computerText.textContent="Computer Selection Error";
    }
}

function determineWinner(player, computer){
    if (player == computer){
        bottomText.textContent= "It's a draw!"
    }
    else if (player ==1){
        if (computer==3 || computer == 4){
            bottomText.textContent= "YOU WIN!";
            score+=1;
        }
        else{
            bottomText.textContent="YOU LOSE!";
            if (score>0){
                score--;
            }
        }
    }
    else if(player==2){
        if (computer ==1 || computer==5){
            bottomText.textContent= "YOU WIN!";
            score+=1;
        }
        else{
            bottomText.textContent="YOU LOSE!";
            if (score>0){
                score--;
            }
        }
    }
    else if(player==3){
        if (computer ==2 || computer==4){
            bottomText.textContent= "YOU WIN!";
            score+=1;
        }
        else{
            bottomText.textContent="YOU LOSE!";
            if (score>0){
                score--;
            }
        }
    }
    else if(player==4){
        if (computer ==2 || computer==5){
            bottomText.textContent= "YOU WIN!";
            score+=1;
        }
        else{
            bottomText.textContent="YOU LOSE!";
            if (score>0){
                score--;
            }
        }
    }
    else if(player==5){
        if (computer ==1 || computer==3){
            bottomText.textContent= "YOU WIN!";
            score+=1;
        }
        else{
            bottomText.textContent="YOU LOSE!";
            if (score>0){
                score--;
            }
        }
    }
    else{
        bottomText.textContent="Please Make a Selection to Calculate";
    }
    document.getElementById('score').textContent= "Scoreboard: " +score;
    
}

