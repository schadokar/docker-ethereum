const express = require("express");
const router = express.Router();
const compile = require("../../ethereum/compile");
const deploy = require("../../ethereum/deploy");

// Compile the contract
router.post("/compile", async function (req, res, next) {
  const result = compile();
  res.send(result);
});

// Deploy the contract
router.post("/deploy", async function (req, res, next) {
  const result = await deploy("Namaste Dockercon 2022!");
  res.send(JSON.parse(result).address);
});

module.exports = router;
