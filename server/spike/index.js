var parseString = require('xml2js').parseString;
var xml = '<?xml version="1.0" encoding="UTF-8" ?><business><company>Code Blog</company><owner>Nic Raboy</owner><employee><firstname>Nic</firstname><lastname>Raboy</lastname></employee><employee><firstname>Maria</firstname><lastname>Campos</lastname></employee></business>';
parseString(xml, function(err, result) {
    console.dir(JSON.stringify(result));
});


var fs = require("fs");
fs.readFile(__dirname + "/index.xml", (err, data) => {
    if (err) throw err;
    // console.log(data);
    parseString(data, function(err, result) {
        fs.writeFile(__dirname+'/message.js', JSON.stringify(result), (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        });
        // console.dir(JSON.stringify(result));
    });
});
// console.log( __dirname+"/../public/dumpfile/" )
