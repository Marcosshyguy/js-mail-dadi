// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// creiamo 2 randomizzatori

const aiDice = Math.floor((Math.random()*6)+1);


const playerDice = Math.floor((Math.random()*6)+1);
console.log( playerDice, aiDice)

if(playerDice === aiDice){
    alert("Pareggio ma il banco vince sempre");
}
else if(playerDice < aiDice){
    alert("Il banco vince")
}
else if(playerDice > aiDice){
    alert("Il giocatore vince...questa VOLTA")
}