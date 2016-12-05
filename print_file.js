var fs = require('fs');
// console.log(process.argv);

var hai1 = process.argv[2];
    hai1 = fs.readFileSync(hai1);

// var hai2 = process.argv[3];
//     hai2 = fs.readFileSync();

// console.log(hai1);
// console.log(hai2);
var change = hai1.toString();
    change = change.toUpperCase();
// var add = fs.writeFileSync('haiku3.txt', hai2);
console.log(change);
