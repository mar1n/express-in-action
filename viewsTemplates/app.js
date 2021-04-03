var express = require("express");
var path = require("path");
var ejs = require("ejs");

var app = express();

app.locals.appName = "Song Lyrics";

app.set("view engin", "jade");
app.set("views", path.resolve(__dirname, "views"));
app.engine("html", ejs.renderFile);

app.use(function(req, res, next) {
    res.locals.userAgent = req.headers["user-agent"];
    next();
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/contact", function(req, res) {
    res.render("contact.ejs");
});

app.use(function(req, res) {
    res.status(404);
    res.render("404.html", {
        urlAttempted: req.url
    });
});

app.listen(3000);
