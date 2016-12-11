var parseString = require('xml2js').parseString;
var fs = require("fs");
var xmlParser = {};


xmlParser.parseFile = function(filePath, cb) {
    fs.readFile(filePath, (err, data) => {
         parseString(data, function(err, result) {
            if(err) return cb(err);
            return cb(null , result);
        });
    });
}

// xmlParser.parseFile(__dirname + "/../spike/index.xml", function(err, result) {
//     // console.log(err)
//     console.log(JSON.stringify(result))
// })

module.exports = xmlParser;

