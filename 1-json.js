const fs = require('fs');
const fileName = '1-json.json';

// Read file
const dataBuffer = fs.readFileSync(fileName);
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

//Change data
data.name = 'Artur';
data.age = '26';

//Write File
const dataStringify = JSON.stringify(data);
fs.writeFileSync(fileName, dataStringify);
