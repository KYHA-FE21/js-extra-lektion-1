// FUNCTIONS

/*function log() {
  console.log("Hejhej");
}

log();
// funktionsanrop

function juiceMaskin(apples, oranges) {
  const juice = `Juice med ${apples} och ${oranges}`;
  return juice;
  // tala om vad vi vill returnera, gör vi inte det blir det undefined när vi kallar på funktionen
}

console.log(juiceMaskin(3, 2));
console.log(juiceMaskin(1, 5));
console.log(juiceMaskin());

function calcAge(age1, age2) {
  const result = age1 + age2;
  return result;
}

console.log(calcAge(23, 44));

// FUNCTION DECLARATION & EXPRESSION

// FUNCTION DECLARATION
function calc(birthYear) {
  return 2022 - birthYear;
}

// FUNCTION EXPRESSION
const calc2 = function (birthYear) {
  return 2022 - birthYear;
};*/

// declaration kan vi kalla på innan vi har deklarerat dom
// men det kan vi inte göra med expression

// ARROW FUNCTIONS ES6
/*const calc3 = (birthYear) => 2021 - birthYear;

const calc4 = (birthYear) => {
  2021 - birthYear;
};*/

// ENKLA ARRAY METODER

/*const dogs = ["Tore", "Doris", "Clementine"];

dogs.push("Ny hund");
console.log(dogs);
// push lägger till i slutet av arrayen

dogs.unshift("Ny hund 2");
console.log(dogs);
// samma som push men värdet hamnar först i arrayen

dogs.pop();
console.log(dogs);
// tar bara bort det sista elementet i arrayen

dogs.shift();
console.log(dogs);
// tar bort första elementet

console.log(dogs.includes("Doris"));
// kollar om det finns i arrayen returnerar true eller false
// boolean

console.log(dogs.indexOf("Tore"));
console.log(dogs.indexOf("Helena"));
// ger oss index av elementet
// om inte elementet finns returnerar den -1
*/
// OBJECT

/*const helena = {
  firstName: "Helena",
  lastName: "Johansson",
  age: 2022 - 1985,
  job: "developer",
  dogs: ["Tore", "Doris", "Clementine"],
};*/

//console.log(helena);

//console.log(helena.firstName);

const helena = {
  firstName: "Helena",
  lastName: "Johansson",
  birthYear: 1985,
  job: "developer",
  dogs: ["Tore", "Doris", "Clementine"],
  calcAge: function () {
    //gör nåt
    return 2022 - this.birthYear;
    // Filura på hur skulle vi göra om vi ska INTE hårdkoda året och istället kunna använda funktionen
    // oavsett år.
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge(1985)} year old ${this.job}.`;
  },
};

console.log(helena.getSummary());
