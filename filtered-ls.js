const fs = require('fs')

const dirname = process.argv[2];
const ext = process.argv[3];

// Aqui estamos usando la funcion
// readdir la cual nos lista los archivos que hay en el directorio ingresado
// contando con parametros como:
// dirname -> el directorio
// la funcion callback al tener una funcion callback el metodo es asincrono
//      esta funcion cuenta con dos parametros que devuelve el error y lo hay 
//      y una lista de strings
fs.readdir(dirname, (err, list)=>{
    if (err) {
        console.log(err)
    }

    // Itereamos la lista que nos devuelve con un for each 
    // a cada item llamamos file 
    // si el item o archivo finaliza en la extension que definimos
    // entonces se imprime el archivo
    list.forEach((file)=>{
        if (file.split('.')[1]===ext) {
                console.log(file)    
        }
    })
})