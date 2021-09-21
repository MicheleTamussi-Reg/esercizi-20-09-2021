var a = prompt("Inserisci un numero");
console.log("primo numero inserito: " + a);
var  b = prompt("Inserisci un'altro numero");
console.log("secondo numero inserito: " + b);
alert("effettua lo scambio dei numeri!")
// scambio delle variabili
a = a ^ b;
b = a ^ b;
a = a ^ b;
alert("scambio effettuato!");
console.log("primo scambiato con il secondo: " + a);
console.log("secondo scambiato con il primo: " + b);