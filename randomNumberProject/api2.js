var express = require("express");

var api = express.Router();

api.get("/timezone", function(req, res) {
    res.send("Api 2: super cool new response for /timezone");
});

module.exports = api;
