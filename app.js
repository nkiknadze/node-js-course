// 1. მოდულის იმპორტი (CommonJS სინტაქსი, რომელსაც Node.js იყენებს)
const fs = require('fs');
const path = require('path');

// ფაილის სახელი, რომელსაც შევქმნით
const fileName = 'example.txt';
const content = 'ეს არის Node.js-ის მიერ შექმნილი ფაილი.\nკეთილი იყოს თქვენი მობრძანება კურსზე!';

console.log('--- ნაბიჯი 1: ფაილში ჩაწერის ოპერაცია იწყება. ---');

// 2. ფაილში ჩაწერა (ასინქრონული)
// Node.js არ ელოდება ამ ოპერაციის დასრულებას, ის აგრძელებს შემდეგ ხაზზე
fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('ფაილის ჩაწერის შეცდომა:', err);
        return;
    }
    console.log(`--- ნაბიჯი 3: ფაილი '${fileName}' წარმატებით შეიქმნა და ჩაიწერა.`);

    // 3. ფაილის წაკითხვა (ასინქრონული)
    fs.readFile(fileName, 'utf8', (readErr, data) => {
        if (readErr) {
            console.error('ფაილის წაკითხვის შეცდომა:', readErr);
            return;
        }
        console.log('\n--- ნაბიჯი 4: ფაილის წაკითხვის შედეგი ---');
        console.log(data);
        console.log('-------------------------------------------');
    });
});

console.log('--- ნაბიჯი 2: კოდი გრძელდება (არ ელოდება ფაილურ ოპერაციას). ---');