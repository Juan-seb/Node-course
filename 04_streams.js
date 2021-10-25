/*The require is considered a bad practice, in proyects use the imports */

const fs = require('fs');
const readStream = fs.createReadStream("./assets/nombres.txt");
const writeStream = fs.createWriteStream("./assets/apellidos.txt")

readStream.pipe(writeStream);

readStream.on('data', (chunk) => {
    /* chunk.forEach(element => {
        console.log(String.fromCharCode(element));
    }); */
    console.log(`He leido ${chunk.length} caracteres`)
});

readStream.on('end', () => {
    console.log("Termine de leer el archivo");
})
