
// READING A FILE and 

var fs = require('fs');

function get_line(filename, line_no, callback) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");

    if(+line_no > lines.length){
      throw new Error('End of file reached without finding the line');
    }
    callback(null, lines[+line_no]);
}

get_line('./helloworld.txt', 3, function(err, line){
    console.log('The line: ' + line);
});