const fs = require('fs')

const filename = process.argv[2]


// Esta es una funcion asincrona la cual
// se pasa el nombre del archivo
// el tipo de la codificacion 
// y una funcion de callback para mandar el error y la data
fs.readFile(filename, "utf8", (err, data)=>{
    if (err) {
        return console.log(err)
    }
    // Nota: si se colocan estas lineas fuera 
    // seran undefined porque al ser un metodo asincrono 
    // se ejecutarian antes que la lectura del archivos
    const lines = data.split("\n").length - 1;
    console.log(lines);
})

