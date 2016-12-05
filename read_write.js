var fs = require('fs');
var arr = process.argv;
console.log(arr);
console.log(arr[1]);

var haiku1 = arr[2];
    haiku1 = fs.readFileSync(haiku1);
    haiku1 = haiku1.toString();
    haiku1 = haiku1.toUpperCase();

var haiku2 = arr[3];
    haiku2 = fs.readFileSync(haiku2);
    haiku2 = haiku2.toString();
    haiku2 = haiku2.toUpperCase();


// var result = arr[4];
//     result = fs.readFileSync(result);
//     result = result.toString();
//     result = result.toUpperCase();

var concatinate = [];

cancatinate = concatinate.concat(haiku1);
concatinate = concatinate.concat(haiku2);

console.log(concatinate);
var spt = concatinate.split(' ');
var result = spt.join(' ');

fs.writeFileSync(process.argv[4],result);
// fs.writeFileSync(process.argv[4],haiku2);
// console.log(haiku1);
