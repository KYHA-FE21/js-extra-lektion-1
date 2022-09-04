// TYPE COERSION
// coersion = när js själv konverterar en datatyp mtill en annan bakom kulisserna

//console.log("Hej, jag heter Helena och jag är " + 36);
//console.log(36);

//console.log("23" - "10" - 3);
//console.log("23" + "10" + 3);

// TYPE CONVERSION
// när javascript inte utför konvertering av sig själv

//const inputYear = "1993";

//console.log(inputYear + 15);

//console.log(Number(inputYear));
// om vi ska konvertera manuellt så kan vi använda inbyggda metoder så som Number(), String()

//console.log(Number(inputYear) + 15);

/*console.log(Number("Helena"));
// NaN = data typen number
console.log(typeof NaN);*/

console.log("23" > "18");
// när det gäller booleans (true/false) så gör js coersion enbart mär det gäller +

// gissa output
let n = "1" + 1;
// här är n = 11, string 11
n = n - 1;
// n = string 11, sen säger vi n = n (11 = 11 sträng) - siffran 1
console.log(n);
// vad får vi i consolen?
// en gissning 10
// en gissning 1

// + blir problem i typ konvertering för att det va två saker
// concatinate eller addera

console.log("hej " + "jag " + "heter Helena");
