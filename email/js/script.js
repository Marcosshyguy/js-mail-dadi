// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// dichiaro elementi html
// dadi computer
let iaOne  = document.getElementById("ia-1");
let iaTwo  = document.getElementById("ia-2");
let iaThree= document.getElementById("ia-3");
let iaFour = document.getElementById("ia-4");
let iaFive = document.getElementById("ia-5");
let iaSix  = document.getElementById("ia-6");
console.log(iaOne, iaTwo);
// dadi player
let playerOne  = document.getElementById("player-1");    
let playerTwo  = document.getElementById("player-2");     
let playerThree  = document.getElementById("player-3");     
let playerFour  = document.getElementById("player-4");     
let playerFive  = document.getElementById("player-5");     
let playerSix  = document.getElementById("player-6"); 

console.log(playerFive,playerFour,playerOne,playerSix,playerTwo,playerThree);
// operatori di relazione
let equalTo  = document.getElementById("equal-to");
let greaterThan = document.getElementById("greater-than");
let lessthan = document.getElementById("less-than");

// creiamo 2 randomizzatori

// const aiDice = Math.floor((Math.random()*6)+1);


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