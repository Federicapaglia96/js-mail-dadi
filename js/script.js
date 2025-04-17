// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const mailUtente = prompt("email utente");
console.log(mailUtente);
 
let found = false;
const validEmails =["ciao@gmail.com", "hello@gmail.com"];
for(let i=0; i<validEmails.length; i++){
    if(mailUtente==validEmails[i]){
     found=true;
    }
}
if(found){
    console.log("accesso consentito");
} else {
    console.log("accesso negato");
}













// esercizio numero due

// //variabile utente
// const userNumber= Math.floor(Math.random() * 6);
// console.log(userNumber);

// // variabile computer
// const computerNumber= Math.floor(Math.random() * 6);
// console.log(computerNumber);
// if (userNumber>computerNumber){
//     console.log("hai vinto!");
// } else if (computerNumber>userNumber){
//     console.log("ritenta sarai più fortunato!")
// } else {
//     console.log("pareggio");
// }

//con Array

// const numbers = [];
// for (let i = 0; i <=1; i++){
//    numbers[i]= Math.floor(Math.random() * 6);
//     console.log(numbers[i]);
// }
// if (numbers[0]>numbers[1]){
//     console.log("hai vinto!");
// } else if (numbers[1]>numbers[0]){
//     console.log("ritenta sarai più fortunato!")
// } else {
//     console.log("pareggio");
// }