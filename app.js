var express = require("express");
var app = express();

app.get("/olivia", function(request, response) {
  response.send("Welcome to Olivia's homepage!");
});

app.get(/^\/users\/(\d+)-(\d+)$/, function(req, res) {
  var startId = parseInt(req.params[0], 10);
  var endId = parseInt(req.params[1], 10);
  console.log(startId, endId);
  res.send("routes test")
})

app.use(function(request, response) {
  response.status(404).send("Page not found!");
});

app.listen(3000);
