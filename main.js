
// variabili globali
const ticketPrice = 0.21;
console.log(`oggi il prezzo è di soli ${ticketPrice} a km! 😃 `);




//chiedi all'utente il numero di km che vuole percorrere = dudeKm
const dudeKm = prompt("quanti km vuoi percorrere? 🤔");
console.log(`hm, hai intenzione di percorrere ${dudeKm} km...`);

//stampa il ticketFullPrice
const ticketFullPrice = ticketPrice * dudeKm;
console.log(`...il prezzo totale è di ${ticketFullPrice}€ 💸`);

//chiedi all'utente l'età e applica lo sconto
const dudeAge = prompt("digita la tua età cosicchè io possa controllare per lei se può usufruire di qualche sconto speciale! 😋" );
//se età minore di 18
if (dudeAge < 18){
    const dudeSale = parseInt((ticketFullPrice * 20) / 100);
    console.log(`per i minorenni abbiamo uno sconto del 20% nel suo caso di ${dudeSale}€ `);
    const ticketFinalPrice = ticketFullPrice - dudeSale;
    console.log(`il tuo prezzo scende a ${ticketFinalPrice.toFixed(2)}€!🤯`);
}else if (dudeAge > 65){
    const dudeSale = parseInt((ticketFullPrice * 40) / 100);
    console.log(`per gli over 65 abbiamo uno sconto del 40% nel suo caso di ${dudeSale}€`);
    const ticketFinalPrice = ticketFullPrice - dudeSale;
    console.log(`il suo prezzo scende a ${ticketFinalPrice.toFixed(2)}€! 🤯`);
}else{
    console.log(`non abbiamo sconti per lei 😢`);
    console.log(`come detto in precedenza il prezzo è di ${ticketFullPrice.toFixed(2)}€`);
}

