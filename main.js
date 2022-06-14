
// variabili globali
const ticketPrice = 0.21;
console.log(`oggi il prezzo è di soli ${ticketPrice} a km! `);




//chiedi all'utente il numero di km che vuole percorrere = dudeKm
const dudeKm = prompt("quanti km vuoi percorrere?");
console.log(`vuoi percorrere ${dudeKm} km`);

//stampa il ticketFullPrice
const ticketFullPrice = ticketPrice * dudeKm;
console.log(`il prezzo totale è di ${ticketFullPrice}€`);

//chiedi all'utente l'età e applica lo sconto
const dudeAge = prompt("se digiti la tua età posso controllare per te se puoi usufruire di qualche sconto speciale!");
//se età minore di 18
if (dudeAge < 18){
    const dudeSale = parseInt((ticketFullPrice * 20) / 100);
    console.log(`per i minorenni abbiamo uno sconto del 20% ovvero ${dudeSale} `);
}else if (dudeAge < 65){
    const dudeSale = (ticketFullPrice * 40) / 100;
    console.log(`per gli over 65 abbiamo uno sconto del 40%`);
}else{
    console.log(`non abbiamo sconti per te :c`);
}

//stampa il ticketFinalPrice
const ticketFinalPrice = ticketFullPrice - dudeSale;
console.log(`il prezzo finale è di ${ticketFinalPrice}€`);

