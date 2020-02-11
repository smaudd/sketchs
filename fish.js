



const url = 'https://www.mercabarna.es/serveis/es_estadistiques-diaries/?export'

const fetch = require('node-fetch');
const { writeFile } = require('fs');
const { promisify } = require('util');
const writeFilePromise = promisify(writeFile);

function downloadFile(url, outputPath) {
    return fetch(url)
        .then(x => x.arrayBuffer())
        .then(x => writeFilePromise(outputPath, Buffer.from(x)));
}

downloadFile(url, './test.csv')