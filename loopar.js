// LOOPAR

//console.log("Loop nr 1");

// FOR LOOP
/*for (let i = 1; i <= 10; i++) {
  // variabeln i är från start = 1, så länge i är mindre än eller lika med 10 så kör loopen,
  // att vi ska öka med 1 för varje iteration
  console.log(`Loop nr ${i}`);
}*/

const dogs = ["Tore", "Doris", "Clementine"];

//console.log(dogs);

/*for (let i = 0; i < 3; i++) {
  console.log(dogs[i]);
}
// DÅLIGT! Vi vet inte alltid hur många element vi har i vår array

for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}

const types = [];

console.log(types);

for (let i = 0; i < dogs.length; i++) {
  // läser in från arrayen
  console.log(dogs[i], typeof dogs[i]);
  // fylla upp den tomma arrayen
  //types[i] = typeof dogs[i];
  // vi kan också göra detta med push
  types.push(typeof dogs[i]);
}

console.log(types);


const helena = ["Helena", 36, "Johansson", 1985];

// CONTINUE
// avslutar nuvarande iteration och hoppar till nästa
for (let i = 0; i < helena.length; i++) {
  // vi ska se till att bara visa strängar i console
  // och säga till js att om det är en annan datatyp än sträng
  // ska den hoppa över den
  if (typeof helena[i] !== "string") continue; // här avslutas loopen om datatypen är nåt annat än string
  // det som händer är att vi kör aldrig rad 49 om vi stöter på en annan datatyp än string
  console.log(helena[i]), typeof helena[i];
}

// BREAK
// avslutar loppen helt och hållet
for (let i = 0; i < helena.length; i++) {
  if (typeof helena[i] === "number") break;
  console.log(helena[i]);
}
*/

// LOOP inne i en annan LOOP
// vi e på gymmet
// vi har tre olika övningar vi ska göra
// 5 rep per övning

for (let exc = 1; exc < 4; exc++) {
  console.log(`Startar övning nr: ${exc}`);

  for (let i = 1; i < 6; i++) {
    console.log(`Övning ${exc}: gör just nu repetition ${i}`);
  }
}
