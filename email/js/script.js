// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// dichiaro elementi html
// dadi computer
const iaOne  = document.getElementById("ia-1");
const iaTwo  = document.getElementById("ia-2");
const iaThree= document.getElementById("ia-3");
const iaFour = document.getElementById("ia-4");
const iaFive = document.getElementById("ia-5");
const iaSix  = document.getElementById("ia-6");
console.log(iaOne, iaTwo);
// dadi player
const playerOne  = document.getElementById("player-1");    
const playerTwo  = document.getElementById("player-2");     
const playerThree  = document.getElementById("player-3");     
const playerFour  = document.getElementById("player-4");     
const playerFive  = document.getElementById("player-5");     
const playerSix  = document.getElementById("player-6"); 

console.log(playerFive,playerFour,playerOne,playerSix,playerTwo,playerThree);
// operatori di relazione
const equalTo  = document.getElementById("equal-to");
const greaterThan = document.getElementById("greater-than");
const lessThan = document.getElementById("less-than");

// bottoni
const btnRoll = document.getElementById("roll");
const btnRetry = document.getElementById("retry");

// creiamo 2 randomizzatori
// e cambiato le faccie del dado al cmbiare del numero

// randomizzatore computer
let aiDice = Math.floor((Math.random()*6)+1);

if(aiDice === 1){
    iaOne.classList.remove("d-none");
}
else if(aiDice === 2){
    iaTwo.classList.remove("d-none")
}
else if(aiDice === 3){
    iaThree.classList.remove("d-none")
}
else if(aiDice === 4){
    iaFour.classList.remove("d-none")
}
else if(aiDice === 5){
    iaFive.classList.remove("d-none")
}
else if(aiDice === 6){
    iaSix.classList.remove("d-none")
}

console.log(aiDice);

// randomizzatore player
let playerDice = ""

btnRoll.addEventListener("click", function(){
    playerDice = Math.floor((Math.random()*6)+1);
    console.log(playerDice, typeof(playerDice));

    if(playerDice === 1){
        playerOne.classList.remove("d-none");
    }
    else if(playerDice === 2){
        playerTwo.classList.remove("d-none")
    }
    else if(playerDice === 3){
        playerThree.classList.remove("d-none")
    }
    else if(playerDice === 4){
        playerFour.classList.remove("d-none")
    }
    else if(playerDice === 5){
        playerFive.classList.remove("d-none")
    }
    else if(playerDice === 6){
        playerSix.classList.remove("d-none")
    }

    if(playerDice === aiDice){
        equalTo.classList.remove("d-none");
        }
        else if(playerDice < aiDice){
            greaterThan.classList.remove("d-none");
        }
        else if(playerDice > aiDice){
            lessThan.classList.remove("d-none");
        }
})
