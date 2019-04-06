const express = require("express");
const router = express.Router();
const compile = require("../../ethereum/compile");
const deploy = require("../../ethereum/deploy");

router.post("/compile", async function(req, res, next) {
    const result = compile();
    res.render("index", {message: result}) 
});

router.post("/deploy", async function(req, res, next) {
    const result = await deploy("Hello World!");
    res.render("index", {message: JSON.parse(result).address}) 
});

module.exports = router;