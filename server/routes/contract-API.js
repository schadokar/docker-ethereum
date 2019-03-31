const express = require("express");
const router = express.Router();
const compile = require("../../ethereum/compile");
const deploy = require("../../ethereum/deploy");

router.post("/compile", async function(req, res, next) {
    const result = compile();
    res.send(result); 
});

router.post("/deploy", async function(req, res, next) {
    const result = await deploy();
    res.send(JSON.parse(result));
});

module.exports = router;