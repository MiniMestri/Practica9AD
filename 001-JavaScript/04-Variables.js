//Variable global
var EDAD_GLOBAL = 45;
console.log("Tu edad es de:");
console.log(EDAD_GLOBAL);

//Variable local
let EDAD_LOCAL = 45;
EDAD_LOCAL = 46;
console.log("Tu edad es de: "+EDAD_LOCAL+" años");

//Variable constante
const EDAD_CONST = 45;
console.log("Tu edad es de: "+EDAD_CONST+" años");

//Encadenamiento 
var EDAD_ENCADENADA = 45;
console.log("Tu edad es de: "+EDAD_ENCADENADA+" años");

//Incrementos
var EDAD_INC = 45;
console.log("Tu edad es de: "+EDAD_INC+" años");
EDAD_INC++;
console.log("Tu edad es de: "+EDAD_INC+" años");
EDAD_INC--;
console.log("Tu edad es de: "+EDAD_INC+" años");

//Operadores abreviados
var EDAD_ABRE = 45;
console.log("Tu edad es de: "+EDAD_ABRE+" años");
EDAD_ABRE += 20; 
console.log("Tu edad es de: "+EDAD_ABRE+" años");
EDAD_ABRE -= 5;
console.log("Tu edad es de: "+EDAD_ABRE+" años");
EDAD_ABRE *= 2;
console.log("Tu edad es de: "+EDAD_ABRE+" años");
EDAD_ABRE /= 5;
console.log("Tu edad es de: "+EDAD_ABRE+" años");