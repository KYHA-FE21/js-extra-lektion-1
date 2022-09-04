// LET CONST & VAR

/*
const är en konstant vilket betyder att om du tilldelat det ett värde kan du inte ändra det senare
const = du kan inte tilldela ett nytt värde
const lesson = "lesson";
lesson = "lektion";
funkar ej

let kan vi använda om vi vill kunna ändra på ett värde i framtiden

{
    //block
}

Ta för vana att alltid använda const och i det fall där du vet att du behöver ändra ett tilldelat värde
använder du let. Om vi lär oss det här och änker på att skriva kod som inte ska vara lätt att komma åt eöeör ändra utifrån
kommer du märka hur sällan man faktiskt använder let



function testArray(array) {
    for (var i = 0; 0 < array.length; i++) {
        console.log("element", array[i]);
    }
    console.log("I can use variable i outside the loop", i);
}
Vi kan få använda variabeln i utanför for-loopen scope. For loopen scope är det rosa.

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

I exemplet nedan ska vi försöka skriva ut alla linjer i array, en linje = [1,2,3] osv

function printMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (var i = 0; i < line.lenght; i++) {
      var element = line[i];
      console.log(element);
    }
  }
}

Output blir bara: [1,2,3] för vi kör helt enkelt över variabeln i när vi loopar en andra gång. Vi har inte två variabler i
utan funktionen har bara en variabel i därför får vi inte korrekt output. Det här är också problemet med funktions-scope

printMatrix(matrix);

function printMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (var i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
}
*/
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//printMatrix(matrix);

// om vi ska visa vår funktion i ett diagram skulle det se ut så här med bara en variable i
/*
fil (js fil)
--------
printMatrix
-argumentet matrix
- variable i
- variable line
- variable element
---------
-variable matrix
*/

// Om vi däremot skriver om exakt samma funktion fast med let och const så kommer vi få rätt output
// alla element i vår array matrix skrivs ut för nu har vi faktiskt två variabler i pga att varje loop har sitt eget scope
// och hela funktionen delar alltså inte på ett enda scope

function printMatrixWithESSix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      const element = line[i];
      console.log(element);
    }
  }
}

printMatrixWithESSix(matrix);
