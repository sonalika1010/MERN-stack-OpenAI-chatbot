"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
// GET
// PUT  
// POST
// DELETE
app.get("/hello", function (req, res, next) {
    return res.send("Hello");
});
app.listen(5000, function () { return console.log("Server Open"); });
