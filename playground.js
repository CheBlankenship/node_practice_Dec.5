function divide(x, y){
  if(y===0){
    throw new Error("you cant divide by zero");
  }
  return x / y;
}

try{
  var answer = divide(50, 5);
  console.log('this answer is : ', answer);
} catch (error) {
  console.error('that didn work');
  console.error('error.message');
}
