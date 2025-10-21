// Task N1 - 1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით

const fs = require("fs");
const path = require("path");

const folders = ["folder1", "folder2"];
const files = ["file1.txt", "file2.txt", "file3.txt"];

folders.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
});

files.forEach((file) => {
  const filePath = path.join(__dirname, file);
  fs.writeFileSync(filePath, `es aris ${file}`);
});

folders.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  const stats = fs.lstatSync(dirPath);
  if (stats.isDirectory()) {
    console.log(`${dir} folderi`);
  }
});

folders.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  fs.rmdirSync(dirPath);
});

console.log("Done");

//Task N2 - 1)შექმენი 2 ფოლდერი 3 ფაილი, წაშალე მარტო ფოლდერები. შეამომწე lstat-ის მეშვეობით


const subfolderPath = path.join(__dirname , 'subfolder' )

if (!fs.existsSync(subfolderPath)) {
  fs.mkdirSync(subfolderPath);
  console.log("sheikmna fodleri");
}

const indexContent = `
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
`;
const indexFilePath = path.join(subfolderPath, "index.js");

fs.writeFileSync(indexFilePath, indexContent);
console.log("index.js shwikmna");
require(indexFilePath);

//Task N3 - შექმენი ფოლდერი ამ ფოლდერში გქონდეს 6 ფაილი. 3 ფაილის გაფართოვება უნდა იყოს .txt. 3 ფაილის გაფართოვება უნდა იყოს .js. შენ უნდა იპოვო ,ისეთი ფაილები, რომლის გაფართოვებაცაა .txt და ისინი ჩწერო საერთო all.txt-ში

const folderPath = path.join(__dirname, "TextFolder");
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

const txtFiles = ["file1.txt", "file2.txt", "file3.txt"];
const jsFiles = ["file4.js", "file5.js", "file6.js"];

txtFiles.forEach((file, index) => {
  const filePath = path.join(folderPath, file);
  fs.writeFileSync(filePath, `txt failebi ${index + 1}`);
});


jsFiles.forEach((file, index) => {
  const filePath = path.join(folderPath, file);
  fs.writeFileSync(filePath, `console.log("js failebi ${index + 1}");`);
});

const allFiles = fs.readdirSync(folderPath);

const onlyTxt = allFiles.filter((file) => path.extname(file) === ".txt");

const allFilePath = path.join(folderPath, "all.txt");

let combinedContent = "";
onlyTxt.forEach((file) => {
  const filePath = path.join(folderPath, file);
  const content = fs.readFileSync(filePath, "utf8");
  combinedContent += `\n ${file} \n${content}\n`;
});
fs.writeFileSync(allFilePath, combinedContent);

//Task N4 - დაწერე http სერვერი და გამოდგი 3 ენდფოინითი (/animals,/cars,/motorcycle)

const http = require('http');

const cxovelebi = ['dzagli', 'kata', 'adamiani'];
const transporti = ['avtomobili', 'tvimfrinavi', 'matarebeli'];
const mokmedeba = ['cekva', 'siaruli', 'saubari'];

const server = http.createServer((req, res) => {
  if (req.url === "/cxovelebi") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ type: "cxovelebi", data: cxovelebi }, null, 2));
  } 
  else if (req.url === "/transporti") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ type: "transporti", data: transporti }, null, 2));
  } 
  else if (req.url === "/mokmedeba") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ type: "mokmedeba", data: mokmedeba }, null, 2));
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404");
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`running http://localhost:${PORT}`);
});
