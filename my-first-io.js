// Modulo
const fs = require("fs");

const filename = process.argv[2];

// Este metodo es sincrono es decir  no va a pasar
// a la siguiente linea hasta que termine 
// de leer el archivo

// Nota: si ponemos como segundo argumento
// a utf8 se pasara a string automaticamente
const file = fs.readFileSync(filename, 'utf8');

// Se pone -1 porque al contar las lineas en el 
// fichero se cuenta desde 0 
const lines = file.split('\n').length - 1;

console.log(file.split('\n')[3])