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

 // esercizio numero uno
// const mailUtente = prompt("email utente");
// console.log(mailUtente);
 
// let found = false;
// const validEmails =["ciao@gmail.com", "hello@gmail.com"];
// for(let i=0; i<validEmails.length; i++){
//     if(mailUtente==validEmails[i]){
//      found=true;
//     }
// }
// if(found){
//     console.log("accesso consentito");
// } else {
//     console.log("accesso negato");
// }



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


//esercizi bonus

// numero 1

// Data un array di numeri, sommare solo quelli pari.
// const numeri = [2, 5, 8, 3, 10, 7];
// Output atteso: 20 (2 + 8 + 10)

// let somma= 0;
// const numeri = [2, 5, 8, 3, 10, 7];
// for(let i=0; i<numeri.length; i++){
//     if(numeri[i]%2==0){
//       somma=somma + numeri[i];
//     }
// }
// console.log(somma);

//numero due


//  Contare quante volte appare il valore "rosso" in un array di stringhe.
// const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
// Output atteso: 3

// const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
//  let contatoreRosso=0;
//  for(let i=0; i<colori.length;i++){
//     if(colori[i]=="rosso"){
 //       //contatoreRosso=contatoreRosso+1;
//         contatoreRosso++;
//     }
//  }
//  console.log(contatoreRosso);


//numero tre
// Creare un nuovo array con gli elementi in ordine inverso (senza usare .reverse()).
// const input = [1, 2, 3, 4];
// Output atteso: [4, 3, 2, 1]

// const input = [1, 2, 3, 4];
// const output =[];
// let index = 0;
// for(let i= input.length-1; i>=0;i--){
//     output[index]=input[i];
//     index++;
// }
// console.log(output);


//numero quattro
// Stampare il valore più piccolo in un array di numeri.
// const numeri = [45, 2, 89, 3, 22];
// Output atteso: 2

// const numeri = [45, 2, 89, 3, 22 ];
// let minimo = numeri[0];
// for(let i=1; i<numeri.length;i++){
//       if(numeri[i]<minimo){
//         minimo=numeri[i]
//       }
// }
// console.log(minimo);

// numero cinque

// Sommare i numeri che si trovano in posizioni dispari dell’array.
// const arr = [10, 20, 30, 40, 50, 60];
// Output atteso: 20 + 40 + 60 = 120


// const arr = [10, 20, 30, 40, 50, 60];
// let somma=0;
// for(let i=0; i<arr.length;i++){
//     if(i%2!=0){
//         somma=somma+arr[i];
//     }
// }
// // for(let i=1; i<arr.length;i=i+2){
// //     somma=somma+arr[i];
// // }
// console.log(somma);


//numero sei
// Calcolare la differenza tra il numero più grande e quello più piccolo in un array.

// Output atteso: 20 - 3 = 17

// const numeri = [5, 12, 3, 20, 8];
// let numMinimo= numeri[0];
// let numMassimo= numeri[0];
// for(let i=1; i<numeri.length; i++){
//       if(numeri[i]<numMinimo){
//         numMinimo=numeri[i];
//       } 
//       if(numeri[i]>numMassimo){
//         numMassimo=numeri[i];
//       }
// }
// console.log(numMassimo-numMinimo);



//esercizio numero sette
// Contare quanti elementi true ci sono in un array di booleani.
// const flags = [true, false, true, true, false];
// Output atteso: 3

// const flags = [true, false, true, true, false];

// let vero= 0; 
// for(let i=0; i<flags.length; i++){
//     if(flags[i]==true){
//         vero=vero+1;
//     }
// }
// console.log(vero)


//esercizio numero otto

// Creare un array in cui ogni numero è il doppio di quello originale. (senza uso di .map)
// Output atteso: [2, 4, 6, 8]
// const numeri = [1, 2, 3, 4];
// const numDoppio= []
// for(let i =0; i<numeri.length; i++){
//        numDoppio[i]=numeri[i]*2
// }
// console.log(numDoppio)

 //numero nove
 // Data una stringa, contare quante vocali contiene (a, e, i, o, u). PS: che cosa succede se qualche vocale è maiuscola? 😉
   // Output atteso: 4
//    const parola = "elefante";
//    let count = 0;
//    for(let i=0; i<parola.length;i++){
//      if(parola[i]== 'a'|| parola[i]=='e'|| parola[i]=='i'|| parola[i]=='o'|| parola[i]=='u' ){
//         count=count+1
//      }
//    }
//    console.log(count)
