// function divide(x, y){
//   if(y===0){
//     throw new Error("you cant divide by zero");
//   }
//   return x / y;
// }
//
// try{
//   var answer = divide(50, 5);
//   console.log('this answer is : ', answer);
// } catch (error) {
//   console.error('that didn work');
//   console.error('error.message');
// }

var fs = require('fs');
var arr = process.argv;
console.log(arr);

try{
  var buffer = fs.readFileSync(arr[2]);
  console.log('Content: ', buffer.toString());
  var result = fs.writeFileSync(arr[3], buffer);

} catch(error) {
  console.log("there is a eroor");
  console.log("The error was: ", error.message);
}

console.log('check');
