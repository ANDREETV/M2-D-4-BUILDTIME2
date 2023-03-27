// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: false,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

let prices = [34, 25, 52]
let shippingCost = 50

//  Soluzione #1
// let totaleCarrello = prices[0] + prices[1] + prices[2];

//  Soluzione #2

let totaleCarrello = 0;
for (let price of prices ) {
    totaleCarrello += price;
}

console.log("totale carrello :", totaleCarrello);



if (marco.isAmbassador) {
  totaleCarrello -= (totaleCarrello * 30/100);
  console.log(marco.name, "ha diritto dello sconto. Nuovo totale", totaleCarrello);
  // totaleCarrello = totaleCarrello + shippingCost soluzione #1
  if (totaleCarrello > 100) {
    shippingCost = 0;
    
  }
  console.log("costo di spedizionene : ", shippingCost);
  // soluzione #1
  totaleCarrello += shippingCost
  console.log("Totale del carelllo + spedizione", totaleCarrello);
} else {
  if (totaleCarrello > 100) {
    shippingCost = 0;
    
  }
  console.log("costo di spedizionene : ", shippingCost);
  totaleCarrello += shippingCost
  console.log("Totale del carelllo + spedizione", totaleCarrello);
}



function n(marco) {
  document.getElementById("bottone").value += marco;
  
}