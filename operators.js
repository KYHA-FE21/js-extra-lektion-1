// EQUALITY OPERATOR (lika med)
const age = 18;

if (age === 18) console.log("Yes det stämmer");

// två sätt === är strict eaquality comparison
// == är loose equality comparison

if ("18" == 18) console.log("yes");
// här har js genomfört coersion konverterar datat typerna
// men om vi använder === så ser vi att dom inte är lika
if ("18" === 18) console.log("lita inte på js!");
// det här blir false

// LOGICAL OPERATORS

const hasDriversLicense = true;
const hasGoodVision = true;

//console.log(hasDriversLicense && hasGoodVision);
// && = och
// här frågar vi om att båda eller alla ska vara av samma värde för att operation ska få resultatet true
//console.log(hasDriversLicense || hasGoodVision);
// || = eller
// här räcker det att en av värdena är sanna för att få resultatet true

//console.log(!hasDriversLicense);
// '!' = not operator

// om && operation ska bli sann och vår kod efter villkorsblocket ska köras
// måste båda villkoren uppfylla true, alltså båda måste vara likadan.
/*if (hasGoodVision && hasDriversLicense) {
  console.log("Ok du får köra bilen");
} else {
  console.log("Någon annan får köra...");
}*/

const isTired = true;
// här är vi trötta

//console.log(hasDriversLicense && hasGoodVision && isTired);
//console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasGoodVision && hasDriversLicense && !isTired) {
  // vi kollar om vi har körtkort (true) och bra syn (true) men vi ska inte vara trötta
  console.log("Ok du får köra bilen");
  // om det stämmer körs det här
} else {
  console.log("Någon annan får köra...");
  // om det inte stämmer körs det här
}

// TERNARY ES6
// ternary är villkorsoperator
// 2 sätt att skriva villkor, det ena är if/else och så finns ternary (och även switch)

const ageTwo = 25;

ageTwo >= 18
  ? console.log("You can drink beer")
  : console.log("You can not drink beer");
// första delen är villkoret vi vill kolla, sen när vi kommer till ?
// det som står bakom ? är det som kommer köras om villkoret stämmer, alltså om ageTwo är större än eller lika med 18
// : representerar else, det som står efter : det kommer köras om villkoret inte är sant

const drink = ageTwo >= 18 ? "beer" : "water";
console.log(drink);

console.log(`I like to drink ${ageTwo >= 18 ? "beer" : "water"}`);
//console.log("I like to drink ${ageTwo}")
