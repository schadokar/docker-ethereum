const express = require("express");
const router = express.Router();

const logic = require("../../ethereum/logic");

router.get("/", async (req,res,next) => {
    let message = await logic.getMessage();
    res.send(message);
})

router.post("/", async (req,res, next) => {
    let message = await logic.setMessage(req.body.message);
    res.send(message.transactionHash);
})

module.exports = router;