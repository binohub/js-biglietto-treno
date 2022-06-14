
// variabili globali
const ticketPrice = 0.21;
document.getElementById("ticket-price").innerHTML = (`oggi il prezzo è di soli ${ticketPrice} a km! 😃 `);




//chiedi all'utente il numero di km che vuole percorrere = dudeKm
const dudeKm = parseInt(prompt("quanti km vuoi percorrere? 🤔"));
if (isNaN(dudeKm)){
    alert("digita un numero valido!");
}

//stampa il ticketFullPrice
const ticketFullPrice = ticketPrice * dudeKm;
document.getElementById("ticket-full-price").innerHTML = (`il prezzo totale è di ${ticketFullPrice.toFixed(2)}€ 💸`);

//chiedi all'utente l'età e applica lo sconto
const dudeAge = parseInt(prompt("digita la tua età cosicchè io possa controllare per lei se può usufruire di qualche sconto speciale! 😋" ));
if (isNaN(dudeAge)){
    alert("digita un numero valido!");
}
//se età minore di 18
if (dudeAge < 18){
    const dudeSale = (ticketFullPrice * 20) / 100;
    document.getElementById("dude-sale").innerHTML = (`per i minorenni abbiamo uno sconto del 20% nel suo caso di ${dudeSale}€ `);
    const ticketFinalPrice = ticketFullPrice - dudeSale;
    document.getElementById("ticket-final-price").innerHTML = (`il suo prezzo scende a ${ticketFinalPrice.toFixed(2)}€!🤯`);
}else if (dudeAge > 65){
    const dudeSale = parseInt((ticketFullPrice * 40) / 100);
    document.getElementById("dude-sale").innerHTML = (`per gli over 65 abbiamo uno sconto del 40% nel suo caso di ${dudeSale}€`);
    const ticketFinalPrice = ticketFullPrice - dudeSale;
    document.getElementById("ticket-final-price").innerHTML = (`il suo prezzo scende a ${ticketFinalPrice.toFixed(2)}€! 🤯`);
}else{
    document.getElementById("dude-sale").innerHTML = (`non abbiamo sconti per lei 😢`);
    document.getElementById("ticket-final-price").innerHTML = (`come detto in precedenza il prezzo è di ${ticketFullPrice.toFixed(2)}€`);
}

