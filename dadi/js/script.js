// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo


// creo un array con le mail gia memorizzate
const storedEmail = ["a@yahoo.it", "b@gmail.com", "c@libero.com"]
console.log(storedEmail, storedEmail.length)

// chiedo all'utente che email usa

let userEmail = prompt("Inserisci la tua Email");

let isFound = false; //variabile  globale che mi permettere di gestire il risultato finale del if dentro al for
// dato che se stampo dentro la console mi stamperà per tutto il numero di sequenze che io ho impostato
// controllo nel mio array di mail gia salvate facendole passare una ad una
for(let i = 0; i < storedEmail.length; i++){

    const element = storedEmail[i]; //creo una costante che agglomera tutte i singoli valori del ciclo for all'interno dellp'array
    if(userEmail === element){
        isFound = true;
    }
}
// Se il la mail corrisponde aquella presente nello storage allora ok
if(isFound === true){
    alert("Hai il diritto di passare");
}
// altrimenti non faccio accedere
else{
    alert("Hai il dovere di riprovare");
}
