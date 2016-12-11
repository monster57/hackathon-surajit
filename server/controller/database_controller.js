var databaseController = {};
var models = require('../models');
var Promise = require("bluebird");
var xmlParser = require("../lib/xmlParser");



databaseController.createTable = function(req, res) {
    var file = req.file;
    var tableName = req.body.table;
    xmlParser.parseFile(__dirname + "/../../" + file.path, function(err, result) {
        if (err) {
            return res.apiError(err);
        }
        var json = JSON.stringify(result);
        Promise.map(JSON.parse(json)[Object.keys(JSON.parse(json))[0]].row, function(row) {
            return models[tableName].create(row.$)
        }).then(function(rows) {
            return res.apiSuccess(tableName + " database is updated");

        });
    });
}

module.exports = databaseController;
