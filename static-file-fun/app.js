var express = require("express");
var path = require("path");
var fs = require("fs");
var morgan = require("morgan");

var app = express();

app.use(morgan("short"));
// app.use(function(req, res, next) {
//     console.log("Request IP: " + req.url);
//     console.log("Request date: " + new Date());
//     next();
// });

// app.use(function(req, res, next) {
//     var filePath = path.join(__dirname, "static", req.url);
//     fs.exists(filePath, function(exists) {
//         if(exists) {
//             res.sendFile(filePath);
//         } else {
//             next()
//         }
//     })
// });

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use(function(req, res) {
    res.status(404);
    res.send("File not found!");
});

app.listen(3000, function() {
    console.log("App started on port 3000");
})