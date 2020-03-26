const https = require('https');

const url = `https://api.darksky.net/forecast/456f7e9e28802b63cdda92aa9dceda2c/38.736946,-9.142685?units=si&lang=pt`;

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(chunk);
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();