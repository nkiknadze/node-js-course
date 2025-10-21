
const fs = require('fs');
const path = require('path');
const messagePath = path.join(__dirname, '..', 'message.txt');

// chawera
fs.writeFileSync(messagePath, 'Hi index.js');

// wakitxva
let data = fs.readFileSync(messagePath, 'utf8');

// monacemis shetrialeba
let reversed = data.split('').reverse().join('');

// igive failshi chawera
fs.writeFileSync(messagePath, reversed);
