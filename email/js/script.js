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
const lessthan = document.getElementById("less-than");

// bottoni
const btnRoll = document.getElementById("roll");
const btnRetry = document.getElementById("retry");

// creiamo 2 randomizzatori

let aiDice = Math.floor((Math.random()*6)+1);




// const playerDice = Math.floor((Math.random()*6)+1);
// console.log( playerDice, aiDice)

// if(playerDice === aiDice){
//     alert("Pareggio ma il banco vince sempre");
// }
// else if(playerDice < aiDice){
//     alert("Il banco vince")
// }
// else if(playerDice > aiDice){
//     alert("Il giocatore vince...questa VOLTA")
// }