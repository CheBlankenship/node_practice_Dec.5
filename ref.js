var fs = require('fs');
var arr = process.argv;
console.log(arr);


fs.readFile(arr[3], function(err, buffer){
  if(err){
    console.log(error.stack);
  }
  else{
    var contents = buffer.toString();
    // var contentsReversed = contents.split('').reverse().join('');
    fs.writeFileSync(arr[4], contentsReversed, function(err) {
      if(err){
        console.error(err.stack);
      }else{
        console.log('success');
      }
    });
  }
});
